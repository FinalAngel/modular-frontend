import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import posthtml from "@vituum/vite-plugin-posthtml";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), posthtml()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: [
      {
        find: /^(components|styles)(.*)/,
        replacement: path.resolve(__dirname, "src/$1$2"),
      },
    ],
  },
  server: {
    port: 8000,
    host: "0.0.0.0",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
