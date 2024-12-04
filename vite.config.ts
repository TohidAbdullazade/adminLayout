import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // give the domain name here example: /zehniadmin
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 3001,
    origin: "http://0.0.0.0:3001",
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
});
