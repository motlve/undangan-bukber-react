import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/undangan-bukber-react/', // Sesuaikan dengan nama repository
});
