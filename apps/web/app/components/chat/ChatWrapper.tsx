import type { ChatProps } from "~/lib/types";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "../ai-elements/conversation";
import ChatEmptyState from "./ChatEmptyState";
import MessageSource from "./MessageSource";
import ChatMessage from "./ChatMessage";
import CustomLoader from "./CustomLoader";

export default function ChatWrapper({
  messages,
  status,
  sendMessageFromHook,
}: ChatProps) {
  const showEmptyState = messages.length === 0;

  if (showEmptyState) {
    return <ChatEmptyState handleAskQuestion={sendMessageFromHook} />;
  }

  const lastMessage = messages[messages.length - 1];
  const hasTextContent = lastMessage?.parts?.some(part => part.type === "text" && part.text.trim() !== "");
  const isLastMessageEmpty = lastMessage?.role === "assistant" && !hasTextContent;
  const showLoader = status === "submitted" || (status === "streaming" && isLastMessageEmpty);
  const showStandaloneLoader = status === "submitted" && lastMessage?.role !== "assistant";


  return (
    <Conversation
      className="size-full h-full bg-background"
    >

      <ConversationContent className="px-0 pt-24 pb-48">
        {messages.map((message, index) => (
          <div key={message.id}>
            <ChatMessage
              showLoader={showLoader}
              message={message}
              isLast={index === messages.length - 1}
            />
            <MessageSource message={message} />
          </div>
        ))}
        {showStandaloneLoader && <div className="max-w-4xl mx-auto px-4 w-full"><CustomLoader /></div>}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
}
