module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module"
  },
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    require: "readonly",
    module: "readonly"
  },
  plugins: ["react", "@lwc/lwc"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@lwc/lwc/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    ...js.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
    ...pluginLwc.configs.recommended.rules
  }
};
