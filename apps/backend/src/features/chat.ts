import { streamText } from "ai";
import { Hono } from "hono";
import { ERRRO_MESSAGES } from "../../constants/errorCodes";
import { MessageSchema } from "../utils/schemas/chat";
import { SYSTEM_PROMPT } from "../../constants/systemPrompt";

export const chatRoute = new Hono();

chatRoute.post('/chat', async (c) => {
    const payload = await c.req.json();
    const validatedPayload = MessageSchema.safeParse(payload);
    
    if (!validatedPayload.success) {
      return c.json({ok: false, error: validatedPayload.error.message, errorMessage: ERRRO_MESSAGES.INVALID_PAYLOAD}, 400);
    }
  
    const userPrompt = validatedPayload.data.message;
  
    const message = streamText({
      model:"google/gemini-2.5-flash",
      prompt:userPrompt,
      system:SYSTEM_PROMPT,
    })
  
    return message.toUIMessageStreamResponse()
  })


