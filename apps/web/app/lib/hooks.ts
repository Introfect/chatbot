import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState } from "react"
import type { ChatProps } from "./types"
import { BACKEND_BASE_URL } from "./constants"

export interface UseChatHookOptions {
    backendUrl?: string;
    slug?: string;
}

export const useChatHook = (model: string, options?: UseChatHookOptions): ChatProps => {
    const [input, setInput] = useState("")

    const api = options?.backendUrl || BACKEND_BASE_URL;
    const slug = options?.slug || "3d-personas-for-complete-customers-insights";

    const { messages, sendMessage, status, } = useChat({
        transport: new DefaultChatTransport({
            api,
            body: { model, slug },
        })
    })

    const sendMessageFromHook = async (message: string) => {
        if (status !== "ready") return;
        await sendMessage({ text: message })
    }
    return { messages, sendMessageFromHook, status, input, setInput }
}  