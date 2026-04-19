import pluginJs from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  
  {
  ignores: ["**/node_modules/**", "package-lock.json"]
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", 
      "no-unused-vars": "warn",     
      "no-console": "off",          
    },
  },
  prettierConfig, 
];
