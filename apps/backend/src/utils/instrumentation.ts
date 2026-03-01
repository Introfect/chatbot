import { LangfuseSpanProcessor, type ShouldExportSpan } from "@langfuse/otel";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";

export const spanProcessor = new LangfuseSpanProcessor({});

const tracerProvider = new NodeTracerProvider({
    spanProcessors: [spanProcessor],
});

tracerProvider.register();
