import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "quotes": ["error", "double"]
    },
    languageOptions: {
      env: {
        node: true,    // Thêm để ESLint hiểu là môi trường Node
        es2021: true,
        browser: false // Tắt nếu không cần browser trong này
      },
      globals: {
        ...globals.node,    // Thêm globals của node (có process, __dirname, ...)
        ...globals.browser  // Nếu muốn vẫn giữ globals của browser (nếu code chung frontend/backend)
      }
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser // Có thể giữ cho file frontend
    }
  },
  pluginReact.configs.flat.recommended,
]);
