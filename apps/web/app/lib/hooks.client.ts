import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useCallback, useEffect, useState } from "react"
import type { ChatProps } from "./types"
import { BACKEND_BASE_URL } from "./constants"

/**
 * Returns the pixel offset needed to keep fixed-bottom elements
 * visible above the mobile virtual keyboard.
 */
export function useKeyboardOffset() {
    const [offset, setOffset] = useState(0)

    const update = useCallback(() => {
        const vv = window.visualViewport
        if (!vv) return
        // The keyboard height is the difference between the layout viewport
        // and the visual viewport, minus any scroll offset of the viewport itself.
        const keyboardHeight = window.innerHeight - vv.height - vv.offsetTop
        setOffset(Math.max(0, keyboardHeight))
    }, [])

    useEffect(() => {
        const vv = window.visualViewport
        if (!vv) return

        vv.addEventListener("resize", update)
        vv.addEventListener("scroll", update)
        return () => {
            vv.removeEventListener("resize", update)
            vv.removeEventListener("scroll", update)
        }
    }, [update])

    return offset
}

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