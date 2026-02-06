import { convertToModelMessages, smoothStream, streamText, UIMessage, stepCountIs } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { ERROR_MESSAGES } from "../../constants/errorCodes";
import { getHono } from "../utils/hono";
import blogSearchToolBuilder from "../features/blogSearchTool";
import { getSystemPrompt } from "../utils/utils";

export const chatRoute = getHono()


chatRoute.post('/chat', async (c) => {
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
    console.log("messages", messages);
    console.log("model", model);
    console.log("slug", slug);

    if (!model) {
      return c.json({ ok: false, error: "Model is required" }, 400);
    }

    const message = streamText({

      model: google(model),
      messages: await convertToModelMessages(messages),
      system: getSystemPrompt({ slug }),
      experimental_transform: smoothStream({
        delayInMs: 40,
        chunking: 'word',
      }),
      stopWhen: stepCountIs(5),
      tools: {
        blog_search: blogSearchToolBuilder(c.env.FRONTEND_APP_URL),
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
})


