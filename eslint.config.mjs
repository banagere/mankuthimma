import coreWebVitals from "eslint-config-next/core-web-vitals";

// ESLint 9+ flat config. Replaces the old .eslintrc.json, which newer ESLint
// versions no longer read.
const config = [
  {
    ignores: [".next/**", "node_modules/**", "build/**", "out/**"],
  },
  ...coreWebVitals,
];

export default config;
