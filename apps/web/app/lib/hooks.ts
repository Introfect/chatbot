import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState } from "react"
import type { ChatProps } from "./types"
import { BACKEND_BASE_URL } from "./constants"

export const useChatHook = (model: string): ChatProps => {
    const [input, setInput] = useState("")

    const { messages, sendMessage, status, } = useChat({
        transport: new DefaultChatTransport({
            api: BACKEND_BASE_URL,
            body: { model, slug: "ai-for-everyone-how-generative-ai-will-change-b2c-interfaces-as-we-know-them" },
        })
    })

    const sendMessageFromHook = async (message: string) => {
        if (status !== "ready") return;
        await sendMessage({ text: message })
    }
    return { messages, sendMessageFromHook, status, input, setInput }
}  