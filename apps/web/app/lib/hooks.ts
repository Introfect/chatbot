import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState } from "react"
import type { ChatProps } from "./types"
import { BACKEND_BASE_URL } from "./constants"

function extractSlugFromPath(): string | null {
    const match = window.location.pathname.match(/^\/blog\/([^\/]+)/)
    return match?.[1] ?? null
}

export const useChatHook = (model: string): ChatProps => {
    const [input, setInput] = useState("")

    const { messages, sendMessage, status, error, clearError } = useChat({
        transport: new DefaultChatTransport({
            api: BACKEND_BASE_URL,
            body: { model, slug: extractSlugFromPath() },
        })
    })

    const sendMessageFromHook = async (message: string) => {
        if (status !== "ready" && status !== "error") return;
        if (status === "error" && clearError) {
            clearError()
        }
        await sendMessage({ text: message })
    }
    return { messages, sendMessageFromHook, status, input, setInput, error }
}  