import extendPrettierConfig from "@pz/prettier-config";

export default {
  plugins: ["prettier"],
  extends: ["prettier", "eslint-config-prettier"],
  rules: {
    "prettier/prettier": ["error", extendPrettierConfig],
  },
};
