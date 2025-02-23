import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    cssCodeSplit: false, // ✅ Bundle CSS into JS
    lib: {
      entry: "src/index.js",
      name: "UIChatLib",
      fileName: (format) => `uichatlib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), cssInjectedByJsPlugin()],
});
