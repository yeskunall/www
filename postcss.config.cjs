module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production"
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
        [require("cssnano")({ preset: "advanced" })]
      : []),
  ],
};
