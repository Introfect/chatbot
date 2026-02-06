import { createContext, useContext, type ReactNode } from "react";

export interface WidgetConfig {
  backendUrl: string;
  model: string;
  slug: string;
}

const WidgetConfigContext = createContext<WidgetConfig | null>(null);

export function useWidgetConfig(): WidgetConfig {
  const ctx = useContext(WidgetConfigContext);
  if (!ctx) {
    throw new Error("useWidgetConfig must be used within a WidgetConfigProvider");
  }
  return ctx;
}

export function WidgetConfigProvider({
  config,
  children,
}: {
  config: WidgetConfig;
  children: ReactNode;
}) {
  return (
    <WidgetConfigContext.Provider value={config}>
      {children}
    </WidgetConfigContext.Provider>
  );
}
