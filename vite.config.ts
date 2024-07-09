import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@images", replacement: "/src/assets/images" },
      { find: "@components", replacement: "/src/components" },
      { find: "@dataProducts", replacement: "/src/data/DataProducts" },
      { find: "@context", replacement: "/src/context/Context.tsx" },
      { find: "@styles", replacement: "/src/index.css" },
      { find: "@utils", replacement: "/src/utils/Utils.ts" },
    ],
  },
});
