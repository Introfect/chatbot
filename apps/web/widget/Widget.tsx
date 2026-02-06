import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { WidgetConfigProvider, type WidgetConfig } from "./config";
import ChatApp from "./ChatApp";

export default function Widget({ config }: { config: WidgetConfig }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WidgetConfigProvider config={config}>
      {/* Chat Panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2147483646,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 2147483647,
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")
            }
            aria-label="Close chatbot"
          >
            <X size={20} />
          </button>

          {/* Chat content */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            <ChatApp />
          </div>
        </div>
      )}

      {/* Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 2147483646,
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#BE2623",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
          }}
          aria-label="Open chatbot"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </WidgetConfigProvider>
  );
}
