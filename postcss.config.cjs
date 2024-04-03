module.exports = {
  plugins: [
    require("postcss-import"),
    // Extraneous step: this might be unneeded because I set `nesting` in `@astro/tailwind` as well
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
        [require("cssnano")({ preset: "advanced" })]
      : []),
  ],
};
