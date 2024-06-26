/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "plugin:astro/recommended",
    "plugin:perfectionist/recommended-alphabetical",
    "plugin:typescript-sort-keys/recommended",
  ],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/strict",
        "plugin:@typescript-eslint/stylistic",
      ],
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: "@typescript-eslint/parser",
      },
    },
    {
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "deprecation/deprecation": "error",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "deprecation",
    "perfectionist",
    "typescript-sort-keys",
  ],
  root: true,
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",

    // There are more of a hindrance than anything
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "Props",
      },
    ],
    "@typescript-eslint/no-var-requires": "warn",
    "astro/no-conflict-set-directives": "error",
    "astro/no-unused-define-vars-in-style": "error",
    "eol-last": "warn",
    "max-len": ["off", { code: 80, ignoreComments: true }],
    "no-console": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
  },
};
