import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "waterhouse-public-entry",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const url = req.url ?? "";
          const isHtmlRoute =
            url === "/" ||
            url.startsWith("/?") ||
            (!url.includes(".") &&
              !url.startsWith("/@") &&
              !url.startsWith("/src") &&
              !url.startsWith("/node_modules"));

          if (isHtmlRoute) {
            req.url = "/index-redesign.html";
          }
          next();
        });
      },
    },
  ],
  root: ".",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@redesign": path.resolve(__dirname, "./src-redesign"),
    },
  },
  build: {
    outDir: "dist-redesign",
    rollupOptions: {
      input: path.resolve(__dirname, "index-redesign.html"),
    },
  },
  server: {
    port: 6002,
    strictPort: true,
  },
});
