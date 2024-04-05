import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      { find: "@app", replacement: fileURLToPath(new URL("./src/app", import.meta.url)) },
      { find: "@modules", replacement: fileURLToPath(new URL("./src/modules", import.meta.url)) },
    ],
  },
});
