import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "app/widget.tsx"),
      name: "ChatbotWidget",
      formats: ["iife"],
      fileName: () => "chatbot-widget.js",
    },
    outDir: "dist/widget",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "chatbot-widget.css";
          }
          return assetInfo.name || "asset";
        },
      },
    },
    minify: "esbuild",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./app"),
    },
  },
});
