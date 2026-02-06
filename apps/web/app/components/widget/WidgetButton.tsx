import { MessageCircle } from "lucide-react";

interface WidgetButtonProps {
    onClick: () => void;
    buttonText?: string;
}

export default function WidgetButton({ onClick, buttonText = "Chat with us" }: WidgetButtonProps) {
    return (
        <button
            onClick={onClick}
            className="widget-button fixed bottom-6 right-6 z-9999 flex items-center gap-3 bg-primary text-primary-foreground rounded-full px-6 py-4 shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            aria-label="Open chat widget"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium text-base">{buttonText}</span>
        </button>
    );
}
