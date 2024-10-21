import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-tailwind-components/",
  plugins: [react()],
  build: {
    sourcemap: true,
    minify: 'esbuild',
  },
});
