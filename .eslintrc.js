export default {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx, .json"],
      },
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "simple-import-sort", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-debugger": "error",
    // variables
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    // types, functions
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    // simple import sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // imports
    "import/no-unresolved": "error",
    "import/no-duplicates": "error",
    // off imports
    "sort-imports": "off",
    "import/order": "off",
  },
};
