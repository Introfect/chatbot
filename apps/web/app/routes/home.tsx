import type { Route } from "./+types/home";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "~/components/ai-elements/message";
import { PromptInput } from "~/components/ai-elements/prompt-input";
import { useChat } from '@ai-sdk/react';

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { messages } = useChat();
  return (
    <div>
      <div>
        {messages.map(({ role, parts }, index) => (
          <Message from={role} key={index}>
            <MessageContent>
              {parts.map((part, i) => {
                switch (part.type) {
                  case 'text':
                    return <MessageResponse key={`${role}-${i}`}>{part.text}</MessageResponse>;
                }
              })}
            </MessageContent>
          </Message>

        ))}
      </div>
      {/* <PromptInput className="mt-4" onSubmit={(message) => { sendMessage(message) }} /> */}
    </div>
  );
}
