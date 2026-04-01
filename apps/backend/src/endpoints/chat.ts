import "../utils/instrumentation";
import { convertToModelMessages, smoothStream, streamText, UIMessage, stepCountIs } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { ERROR_MESSAGES } from "../../constants/errorCodes";
import { getHono } from "../utils/hono";
import blogSearchToolBuilder from "../features/blogSearchTool";
import { getSystemPrompt, getUserMessage } from "../utils/utils";
import { trace } from "@opentelemetry/api";
import {
  observe,
  updateActiveObservation,
  updateActiveTrace,
} from "@langfuse/tracing";
import { waitUntil } from "cloudflare:workers";
import { spanProcessor } from "../utils/instrumentation";

export const chatRoute = getHono()


chatRoute.post('/chat', observe(async (c) => {
  try {
    const google = createGoogleGenerativeAI({
      apiKey: c.env.GOOGLE_AI_API_KEY,
    })
    console.log("google", google);

    const {
      messages,
      model,
      slug,
    }: {
      messages: UIMessage[];
      model: string;
      slug: string | null;
    } = await c.req.json();

    const modelMessages = await convertToModelMessages(messages);

    const lastMessage = modelMessages.at(-1);

    if (!lastMessage) {
      throw new Error("User message is required");
    }

    if (!model) {
      return c.json({ ok: false, error: "Model is required" }, 400);
    }

    const userMessage = getUserMessage(lastMessage);
    updateActiveObservation({
      input: userMessage,
    });

    updateActiveTrace({
      metadata: {
        slug,
      },
      input: lastMessage.content,
    });


    const systemPrompt = getSystemPrompt({ slug });

    const message = streamText({
      model: google(model),
      messages: modelMessages,
      system: systemPrompt,
      experimental_transform: smoothStream({
        delayInMs: 40,
        chunking: 'word',
      }),
      stopWhen: stepCountIs(5),
      tools: {
        blog_search: blogSearchToolBuilder(),
      },
      experimental_telemetry: { isEnabled: true },

      onFinish: async (result) => {
        updateActiveObservation({
          output: result.content,
        });
        updateActiveTrace({
          metadata: {
            slug,
          },
          output: result.content,
        });
        // End span manually after stream has finished
        trace.getActiveSpan()?.end();
        waitUntil(spanProcessor.forceFlush());
      },
    });

    return message.toUIMessageStreamResponse({
      sendReasoning: true,
      sendSources: true,
    });
  }

  catch (error) {
    return c.json({ ok: false, error: error instanceof Error ? error.message : "An unknown error occurred", errorMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR }, 500);
  }
}, { name: "chat-handler", endOnExit: false }))


