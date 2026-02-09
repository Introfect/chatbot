import { Tool, tool } from "ai";
import parseMD from "parse-md";
import z from "zod";

export const blogSearchToolBuilder = (): Tool => {
    return tool({
        description: "Get content of the blog post the user is asking about",
        inputSchema: z.object({
            slug: z.string(),
        }),
        execute: async ({ slug }) => {
            try {
                console.log({
                    msg: "FETCHING BLOG POST"
                });
                const data = await fetch(`/seedtoscale-blogs/${slug}.md`).then(async res => {
                    if (!res.ok) {
                        throw new Error(`Failed to fetch blog post: ${res.statusText}`);
                    }
                    return await res.text();
                });
                console.log({
                    msg: "DATA FROM BLOG SEARCH TOOL",
                    data,
                });
                const parsed = parseMD(data);
                console.log({
                    msg: "PARSED DATA FROM BLOG SEARCH TOOL",
                    parsed,
                });
                return {
                    content: parsed.content,
                    metadata: parsed.metadata,
                };
            }
            catch (error) {
                console.error({
                    msg: "ERROR FROM BLOG SEARCH TOOL",
                    error,
                });
                return {
                    content: "",
                    metadata: {},
                };
            }
        },
    })

}


export default blogSearchToolBuilder;