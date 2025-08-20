import jsPkg from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

const { configs: jsConfigs } = jsPkg;

export default [
  // Ignore folders/files
  {
    ignores: ["node_modules/**", "build/**", "**/*.test.js"],
  },

  // JS files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: jsConfigs.recommended.rules,
  },

  // React plugin recommended config
  {
    plugins: { react: pluginReact },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // ⚡ turn off this rule for React 17+
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect", // auto-detect React version
      },
    },
  },
];
