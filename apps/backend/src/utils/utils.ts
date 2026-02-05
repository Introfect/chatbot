import { SYSTEM_PROMPT } from "../../constants/systemPrompt";

export function getSystemPrompt({ slug }: { slug: string | null }) {
    return slug
        ? `${SYSTEM_PROMPT}\n\nThe user is currently viewing the blog post with slug: "${slug}". When they ask about "this article" or "the blog", use blog_search with this slug.`
        : SYSTEM_PROMPT;
}