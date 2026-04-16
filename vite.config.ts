import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => ({
  // Em produção servimos sob /previncendio/ (Nginx + Easypanel).
  // Em desenvolvimento (Lovable preview / vite dev) servimos na raiz.
  base: mode === "production" ? "/previncendio/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
