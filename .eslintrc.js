/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
  ],
  ignorePatterns: ["dist", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "prettier/prettier": "off",
      },
    },
    {
      files: ["**/*.mjs"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
      },
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "warn",
    "eol-last": "warn",
    "max-len": ["off", { code: 80, ignoreComments: true }],
    "no-console": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
    "prettier/prettier": ["warn", { singleQuote: false }],
  },
};
