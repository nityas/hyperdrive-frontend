import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      "@delvtech/hyperdrive-wasm?v0.9.1": "@delvtech/hyperdrive-wasm",
    },
  },
});
