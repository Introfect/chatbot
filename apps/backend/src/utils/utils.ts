import { ModelMessage } from "ai";
import { SYSTEM_PROMPT } from "../../constants/systemPrompt";

export function getSystemPrompt({ slug }: { slug: string | null }) {
    return slug
        ? `${SYSTEM_PROMPT}\n\nThe user is currently viewing the blog post with slug: "${slug}". When they ask about "this article" or "the blog", use blog_search with this slug.`
        : SYSTEM_PROMPT;
}


export function getUserMessage(lastMessage: ModelMessage) {
    if (lastMessage.role !== "user") {
        return null;
    }

    const lastMessageContent = lastMessage.content;

    if (typeof lastMessageContent === "string") {
        return lastMessageContent;
    }

    const lastPart = lastMessageContent.at(-1);

    if (!lastPart) {
        throw new Error("User message content is empty");
    }

    if (lastPart.type === "text") {
        return lastPart.text;
    }

    return null;
}