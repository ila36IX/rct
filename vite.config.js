import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/projects": {
        target: "http://localhost:3000/",
        changeOrigin: true,
      },
      //"/public": {
      //  target: "http://localhost:3000",
      //  changeOrigin: true,
      //},
    },
  },
  plugins: [react()],
});
