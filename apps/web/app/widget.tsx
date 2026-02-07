import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import WidgetButton from "~/components/widget/WidgetButton";
import WidgetOverlay from "~/components/widget/WidgetOverlay";
import { useChatHook } from "~/lib/hooks.client";
import { MODELS } from "~/lib/constants";
// Import CSS as inline string so we can inject it into Shadow DOM
import widgetStyles from "./widget.css?inline";

// Widget Root Component
function ChatbotWidgetApp({ buttonText }: { buttonText?: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const chatProps = useChatHook(MODELS.gemini3FlashPreview);

    return (
        <>
            {!isExpanded && (
                <WidgetButton
                    onClick={() => setIsExpanded(true)}
                    buttonText={buttonText}
                />
            )}
            {isExpanded && (
                <WidgetOverlay
                    onClose={() => setIsExpanded(false)}
                    {...chatProps}
                />
            )}
        </>
    );
}

// Web Component Definition
class ChatbotWidget extends HTMLElement {
    private root: ReturnType<typeof createRoot> | null = null;
    private _shadowRoot: ShadowRoot;
    private currentPathname: string = "";
    private urlCheckInterval: number | null = null;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // Inject styles into Shadow DOM so Tailwind classes work
        const style = document.createElement("style");
        style.textContent = widgetStyles;
        this._shadowRoot.appendChild(style);

        // Create container for React app
        const container = document.createElement("div");
        container.id = "chatbot-widget-root";
        container.style.cssText = "width:100%;height:100%;";
        this._shadowRoot.appendChild(container);

        // Get attributes
        const buttonText = this.getAttribute("button-text") || "Chat with us";
        const apiUrl = this.getAttribute("api-url");

        // Set environment variable if provided
        if (apiUrl) {
            // Store in a global for the widget to use
            (window as any).__CHATBOT_WIDGET_API_URL__ = apiUrl;
        }

        // Mount React app
        this.root = createRoot(container);
        this.root.render(
            <React.StrictMode>
                <ChatbotWidgetApp buttonText={buttonText} />
            </React.StrictMode>
        );

        // Track current pathname and detect URL changes
        this.currentPathname = window.location.pathname;
        this.urlCheckInterval = window.setInterval(() => {
            if (window.location.pathname !== this.currentPathname) {
                this.handleUrlChange();
            }
        }, 500);
    }

    private handleUrlChange() {
        this.currentPathname = window.location.pathname;

        // Unmount existing React app
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }

        // Clear shadow DOM
        this._shadowRoot.innerHTML = "";

        // Re-inject styles
        const style = document.createElement("style");
        style.textContent = widgetStyles;
        this._shadowRoot.appendChild(style);

        // Recreate container
        const container = document.createElement("div");
        container.id = "chatbot-widget-root";
        container.style.cssText = "width:100%;height:100%;";
        this._shadowRoot.appendChild(container);

        // Get attributes
        const buttonText = this.getAttribute("button-text") || "Chat with us";

        // Remount React app with fresh state
        this.root = createRoot(container);
        this.root.render(
            <React.StrictMode>
                <ChatbotWidgetApp buttonText={buttonText} />
            </React.StrictMode>
        );
    }

    disconnectedCallback() {
        // Clear URL check interval
        if (this.urlCheckInterval !== null) {
            clearInterval(this.urlCheckInterval);
            this.urlCheckInterval = null;
        }

        // Unmount React app
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }
    }

    static get observedAttributes() {
        return ["button-text", "api-url"];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue !== newValue && this.root) {
            // Re-render on attribute change
            const buttonText = this.getAttribute("button-text") || "Chat with us";
            this.root.render(
                <React.StrictMode>
                    <ChatbotWidgetApp buttonText={buttonText} />
                </React.StrictMode>
            );
        }
    }
}

// Register the custom element
if (!customElements.get("chatbot-widget")) {
    customElements.define("chatbot-widget", ChatbotWidget);
}

// Export for potential programmatic usage
export { ChatbotWidget };
