import type { ChatProps } from "~/lib/types";
import {
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
  error,
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
    <>
      <ConversationContent className="px-0 pt-24 pb-48 sm:pb-56">
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
        {error && (
          <div className="max-w-4xl mx-auto px-4 w-full mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm text-red-800 font-medium">Something went wrong</p>
                <p className="text-sm text-red-600 mt-1">Try sending your message again.</p>
              </div>
            </div>
          </div>
        )}
      </ConversationContent>
      <ConversationScrollButton className=" bg-black bottom-[150px] md:bottom-[150px]" />
    </>
  );
}
