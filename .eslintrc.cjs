/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react/jsx-no-undef": "off",
    "react/jsx-key": "warn",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-no-target-blank": "warn",
    "jsx-a11y/alt-text": "warn"
  },
  ignorePatterns: [
    "node_modules/", 
    ".next/", 
    "out/", 
    "**/*.d.ts",
    "src/types/"
  ]
}; 