import type { UIMessage } from "ai";
import { Message, MessageContent, MessageResponse } from "../ai-elements/message";
import { STS_LOGO_URL } from "~/lib/constants";
import { cn } from "~/lib/utils"
import AiLogo from "./AiLogo";
import Lottie from "lottie-react";
import starMagicAnimation from "../../../public/star-magic.json";

type ChatMessageProps = {
    showLoader: boolean;
    message: UIMessage;
    isLast: boolean;
};

export default function ChatMessage({ showLoader, message, isLast }: ChatMessageProps) {
    const isUser = message.role === "user";
    const hasTextContent = message.parts.some(part => part.type === "text" && part.text.trim() !== "");
    const messageTextIsEmpty = !hasTextContent;
    const showMessageLoader = isLast && showLoader && message.role === "assistant" && messageTextIsEmpty;

    return (
        <Message className={cn("max-w-4xl mx-auto px-3 sm:px-4 mb-4 sm:mb-6", isUser ? "items-end" : "items-start")} from={message.role}>
            <div className={cn("flex items-start gap-3 sm:gap-4 w-full", isUser ? "flex-row-reverse" : "flex-row")}>
                {showMessageLoader ? (
                    <Lottie animationData={starMagicAnimation} loop={true} className="size-7 sm:size-8 shrink-0 mt-1" />
                ) : (
                    <AiLogo isUser={isUser} messageTextIsEmpty={messageTextIsEmpty} />
                )}
                <MessageContent className={cn("prose prose-sm sm:prose-base max-w-full", isUser ? "bg-primary text-white" : "")}>
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case "text":
                                return (
                                    <MessageResponse key={`${message.id}-${i}`}>
                                        {part.text}
                                    </MessageResponse>
                                );
                            default:
                                return null;
                        }
                    })}
                    {showMessageLoader && (
                        <p className="text-sm text-gray-500 animate-pulse">Thinking...</p>
                    )}
                </MessageContent>
            </div>
        </Message>
    );
}
