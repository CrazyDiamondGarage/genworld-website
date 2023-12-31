import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@comp", replacement: path.resolve(__dirname, "src/components") },
      { find: "@asset", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
  build: {
    //rollupOptions: {
    //  input: 'src/index.html'
    //},
    outDir: "build",
  },
});
