import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  base: "/undangan-bukber-react/", // Sesuaikan dengan nama repository
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["node_modules"],
  },
>>>>>>> 944a3a3 (Inisialisasi repo baru)
});
