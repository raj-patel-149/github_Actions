import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginLwc from "@lwc/eslint-plugin-lwc";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        require: "readonly",
        module: "readonly"
      }
    },
    plugins: {
      react: pluginReact,
      lwc: pluginLwc
    },
    rules: {
      ...js.configs.recommended.rules
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  pluginReact.configs.recommended,
  pluginLwc.configs.recommended
];
