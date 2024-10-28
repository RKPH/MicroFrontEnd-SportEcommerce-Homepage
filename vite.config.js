// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "ProductPages",
      filename: "remoteEntry.js",
      exposes: {
        "./MenPage": "./src/Pages/MenPage.jsx",
        "./WomenPage": "./src/Pages/WomenPage.jsx",
        "./KidsPage": "./src/Pages/KidsPage.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
