import {z} from "zod";

export const MessageSchema = z.object({
    message: z.string().min(1, { message: "Message is required" }),
});