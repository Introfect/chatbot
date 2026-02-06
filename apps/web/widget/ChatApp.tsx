import ChatWrapper from "~/components/chat/ChatWrapper";
import InputWrappper from "~/components/chat/InputWrappper";
import Navbar from "~/components/shared/Navbar";
import { useChatHook } from "~/lib/hooks";
import { useWidgetConfig } from "./config";

export default function ChatApp() {
  const { backendUrl, model, slug } = useWidgetConfig();
  const chatProps = useChatHook(model, { backendUrl, slug });

  return (
    <div className="min-size-full size-full relative flex flex-col items-center justify-center bg-background">
      <Navbar />
      <div className="max-w-4xl h-full w-full mx-auto">
        <div className="flex flex-col overflow-hidden no-scrollbar size-full">
          <div className="flex-1 min-h-0 no-scrollbar h-full">
            <ChatWrapper key={chatProps.status} {...chatProps} />
          </div>
          <div className="w-full bg-background fixed bottom-0 left-0 right-0">
            <InputWrappper key={chatProps.status} {...chatProps} />
          </div>
        </div>
      </div>
    </div>
  );
}
