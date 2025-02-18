import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr"; // Importa il plugin SVGR

export default defineConfig({
  plugins: [react(), svgr()], // Aggiungi il plugin SVGR
});
