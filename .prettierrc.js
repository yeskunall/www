/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  plugins: [
    require("prettier-plugin-astro"),
    require("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "**/*astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
