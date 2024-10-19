import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "homepage",
      filename: "remoteEntry.js",
      exposes: {
        "./HomePage": "./src/Homepage.jsx", // Ensure the file name matches exactly
      },
      shared: ["react", "react-dom"], // Shared dependencies
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
