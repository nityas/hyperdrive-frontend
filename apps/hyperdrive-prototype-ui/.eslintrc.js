module.exports = {
  root: true,
  ignorePatterns: ["generated.ts"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // Removes the requirement to import `React` when you use jsx
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
    // @hyperdrive/eslint-config needs to be the last config extended because it includes prettier
    "@hyperdrive/eslint-config",
  ],
  rules: {
    // Disable ordering in favor of prettier plugin
    "tailwindcss/classnames-order": "off",
  },
};
