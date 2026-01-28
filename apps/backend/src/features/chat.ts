import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {  Hono } from "hono";
import { ERRRO_MESSAGES } from "../../constants/errorCodes";
import { MessageSchema } from "../utils/schemas/chat";
import { SYSTEM_PROMPT } from "../../constants/systemPrompt";

export const chatRoute = new Hono<{ Bindings: Cloudflare.Env }>();


chatRoute.post('/chat', async (c) => {
  try{

    const google = createGoogleGenerativeAI({
      apiKey: c.env.GOOGLE_AI_API_KEY,
    })

    const payload = await c.req.json();
    const validatedPayload = MessageSchema.safeParse(payload);

    if (!validatedPayload.success) {
      return c.json({ok: false, error: validatedPayload.error.message, errorMessage: ERRRO_MESSAGES.INVALID_PAYLOAD}, 400);
    }

    const userPrompt = validatedPayload.data.message;
    
    const message = streamText({
      model: google("gemini-3-flash-preview"),
      prompt:userPrompt,  
      system:SYSTEM_PROMPT,
    });
    
    return message.toUIMessageStreamResponse();
  }

  catch(error){
    return c.json({ok: false, error: error instanceof Error ? error.message : "An unknown error occurred", errorMessage: ERRRO_MESSAGES.INTERNAL_SERVER_ERROR}, 500);
  }
  })


