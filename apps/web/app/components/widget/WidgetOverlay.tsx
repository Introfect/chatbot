import { X } from "lucide-react";
import ChatWrapper from "~/components/chat/ChatWrapper";
import InputWrappper from "~/components/chat/InputWrappper";
import SeedToScaleLogo from "~/components/svg/SeedToScaleLogo";
import type { ChatProps } from "~/lib/types";
import { Conversation } from "~/components/ai-elements/conversation";
import { useKeyboardOffset } from "~/lib/hooks.client";

interface WidgetOverlayProps extends ChatProps {
    onClose: () => void;
}

export default function WidgetOverlay({ onClose, ...chatProps }: WidgetOverlayProps) {
    const keyboardOffset = useKeyboardOffset();

    return (
        <div className="widget-overlay fixed inset-0 z-9998 bg-background animate-fade-in">
            {/* Navbar with Close Button */}
            <div className="w-full fixed top-0 z-10 bg-primary/95 py-4">
                <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                        <SeedToScaleLogo className="w-36" />
                    </span>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full hover:bg-primary-foreground/20 transition-colors duration-200"
                        aria-label="Close chat widget"
                    >
                        <X className="w-5 h-5 text-primary-foreground" />
                    </button>
                </div>
            </div>

            {/* Chat Interface - matches ChatLayout structure */}
            <div className="min-size-full size-full relative flex flex-col items-center justify-center">
                <div className="max-w-4xl h-full w-full mx-auto">
                    <div className="flex flex-col overflow-hidden no-scrollbar size-full">
                        <Conversation className="flex-1 min-h-0 h-full bg-background pt-16">
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
                </div>
            </div>
        </div>
    );
}
