import type { UIMessage } from "ai";
import { Source, Sources, SourcesContent, SourcesTrigger } from "../ai-elements/sources";

type MessageSourceProps = {
    message: UIMessage;
};

export default function MessageSource({ message }: MessageSourceProps) {
    const sourceUrls = message.parts.filter((part) => part.type === "source-url");

    if (message.role !== "assistant" || sourceUrls.length === 0) {
        return null;
    }

    return (
        <Sources>
            <SourcesTrigger count={sourceUrls.length} />
            {sourceUrls.map((part, i) => (
                <SourcesContent key={`${message.id}-source-${i}`}>
                    <Source
                        href={part.type === "source-url" ? part.url : ""}
                        title={part.type === "source-url" ? part.url : ""}
                    />
                </SourcesContent>
            ))}
        </Sources>
    );
}
