export default {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx, .json"],
      },
    },
  },
  extends: ["@bam", "eslint:recommended", "plugin:import/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    "no-console": "error",
    "no-alert": "error",
    "no-debugger": "error",
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
