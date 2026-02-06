import { createRoot } from "react-dom/client";
import Widget from "./Widget";
import type { WidgetConfig } from "./config";
import cssText from "./widget.css?inline";

const DEFAULT_BACKEND_URL = "https://sts-ai-backend.aayushman-singh.workers.dev/chat";
const DEFAULT_MODEL = "gemini-3-flash-preview";
const DEFAULT_SLUG = "3d-personas-for-complete-customers-insights";

function init() {
    const script =
        document.currentScript ??
        document.querySelector<HTMLScriptElement>("script[data-chatbot-widget]");

    const config: WidgetConfig = {
        backendUrl:
            script?.getAttribute("data-backend-url") ?? DEFAULT_BACKEND_URL,
        model: script?.getAttribute("data-model") ?? DEFAULT_MODEL,
        slug: script?.getAttribute("data-slug") ?? DEFAULT_SLUG,
    };

    // Create host element
    const host = document.createElement("div");
    host.id = "chatbot-widget-host";
    host.style.cssText = "position:fixed;z-index:2147483645;inset:0;pointer-events:none;";
    document.body.appendChild(host);

    // Attach Shadow DOM
    const shadow = host.attachShadow({ mode: "open" });

    // Inject processed CSS into shadow root
    const style = document.createElement("style");
    style.textContent = cssText;
    shadow.appendChild(style);

    // Create mount point inside shadow
    const mountPoint = document.createElement("div");
    mountPoint.id = "chatbot-widget-root";
    mountPoint.style.cssText = "pointer-events:auto;height:100%;";
    shadow.appendChild(mountPoint);

    // Mount React
    const root = createRoot(mountPoint);
    root.render(<Widget config={config} />);
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
