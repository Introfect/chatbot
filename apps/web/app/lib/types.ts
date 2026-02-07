import type { ChatStatus, UIMessage } from "ai";

export type ChatProps = {
  messages: UIMessage[];
  status: ChatStatus;
  input: string;
  setInput: (input: string) => void;
  sendMessageFromHook: (message: string) => void;
  error?: Error;
  stickToBottom?: any;
};
