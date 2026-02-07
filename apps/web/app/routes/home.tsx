import ChatWrapper from "~/components/chat/ChatWrapper";
import InputWrappper from "~/components/chat/InputWrappper";
import Navbar from "~/components/shared/Navbar";
import { MODELS } from "~/lib/constants";
import { useChatHook } from "~/lib/hooks";
import { Conversation } from "~/components/ai-elements/conversation";

export default function Home() {
  const chatProps = useChatHook(MODELS.gemini3FlashPreview);

  return (
    <div className="flex flex-col overflow-hidden no-scrollbar size-full">
      <Conversation className="flex-1 min-h-0 h-full bg-background">
        <ChatWrapper {...chatProps} />
        <div className="w-full bg-background fixed bottom-0 left-0 right-0">
          <InputWrappper
            {...chatProps}
          />
        </div>
      </Conversation>
    </div>
  );
}
