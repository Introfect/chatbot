import ChatWrapper from "~/components/chat/ChatWrapper";
import InputWrappper from "~/components/chat/InputWrappper";
import Navbar from "~/components/shared/Navbar";
import { MODELS } from "~/lib/constants";
import { useChatHook, useKeyboardOffset } from "~/lib/hooks.client";
import { Conversation } from "~/components/ai-elements/conversation";

export default function Home() {
  if (typeof window === "undefined") {
    return null
  }
  const chatProps = useChatHook(MODELS.gemini3FlashPreview);
  const keyboardOffset = useKeyboardOffset();

  return (
    <div className="flex flex-col overflow-hidden no-scrollbar size-full">
      <Conversation className="flex-1 min-h-0 h-full bg-background">
        <ChatWrapper {...chatProps} />
        <div
          className="w-full bg-background fixed left-0 right-0 transition-[bottom] duration-100"
          style={{ bottom: `${keyboardOffset}px` }}
        >
          <InputWrappper
            {...chatProps}
          />
        </div>
      </Conversation>
    </div>
  );
}
