import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        require: "readonly", // Declare 'require' as a global variable
        module: "readonly" // Declare 'module' as a global variable
      }
    }
  },
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect" // Automatically detect React version
      }
    }
  }
]);
