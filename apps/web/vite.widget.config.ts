import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: false,
  resolve: {
    alias: {
      "~": resolve(__dirname, "app"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "widget/entry.tsx"),
      formats: ["iife"],
      name: "ChatbotWidget",
      fileName: () => "chatbot-widget.js",
    },
    outDir: "dist-widget",
    cssCodeSplit: false,
    assetsInlineLimit: 100_000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
