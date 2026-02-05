import { useStickToBottom } from "use-stick-to-bottom";
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
} from "../ai-elements/prompt-input";
import type { ChatProps } from "~/lib/types";

export default function InputWrappper({
  sendMessageFromHook,
  status,
  input,
  setInput,
}: ChatProps) {
  const sticktoBottom = useStickToBottom();
  function handleSubmit(message: string) {
    sticktoBottom.scrollToBottom();
    if (input.trim() === "") return;
    setInput("");
    sendMessageFromHook(message);
  }

  const isDisabled = status === "submitted" || status === "streaming";

  return (
    <div className="mb-8 max-w-3xl w-full mx-auto px-4">
      <PromptInput
        className="rounded-2xl bg-white border-none shadow-xl ring-1 ring-black/5"
        onSubmit={(message, event) => handleSubmit(message.text)}
      >
        <PromptInputTextarea
          autoFocus={true}
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
          className="w-full pl-6 pr-16 py-6 min-h-16 text-lg"
        />
        <PromptInputSubmit
          disabled={isDisabled}
          status={status}
          className="absolute right-3 bottom-3 size-10 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-md"
        />
      </PromptInput>
    </div>
  );
}
