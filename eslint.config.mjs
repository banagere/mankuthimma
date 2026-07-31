import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

// ESLint 9 flat config. `eslint-config-next` went with Next; what replaced it
// is the same set of rules assembled directly — typescript-eslint for the TS,
// the react/react-hooks/jsx-a11y plugins for the islands, and the Astro plugin
// for the .astro files, which need their own parser.
export default tseslint.config(
  {
    ignores: ["dist/**", ".astro/**", ".vercel/**", "node_modules/**"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  {
    files: ["**/*.{ts,tsx,mts,astro}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  {
    files: ["**/*.tsx"],
    ...react.configs.flat.recommended,
    ...react.configs.flat["jsx-runtime"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },
);
