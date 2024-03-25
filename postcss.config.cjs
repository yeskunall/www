module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
        [require("cssnano")({ preset: "advanced" })]
      : []),
  ],
};
