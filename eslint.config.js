import config from "@antfu/eslint-config";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import * as regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import tailwind from "eslint-plugin-tailwindcss";

export const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  resolvePluginsRelativeTo: import.meta.dirname,
});

export default config(
  {
    astro: {
      overrides: {
        "antfu/no-top-level-await": "off",
      },
    },
    formatters: {
      css: true,
      markdown: "dprint",
    },
    ignores: [
      "**/.*",
      "**/*.d.ts",
      ".astro",
      ".editorconfig",
      ".github",
      ".vercel",
      "/internal/",
      "src/generated/",
      "postcss.config.cjs",
    ],
    react: true,
    stylistic: {
      indent: 2,
      quotes: "double",
    },
    typescript: {
      tsconfigPath: "tsconfig.json",
    },
  },
  {
    rules: {
      "style/semi": "off",
    },
  },
  jsxA11y.flatConfigs.strict,
  regexp.configs["flat/recommended"],

  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "cn", "cva"],
      },
    },
  },

  ...fixupConfigRules(
    compat.extends("plugin:typescript-sort-keys/recommended"),
  ),
  security.configs.recommended,
);
