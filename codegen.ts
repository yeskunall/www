import type { CodegenConfig } from "@graphql-codegen/cli";

const config = {
  generates: {
    "src/generated/types/types.ts": {
      plugins: ["typescript"],
    },
  },
  overwrite: true,
  schema: "internal/literal-club/schema.graphql",
} satisfies CodegenConfig;

export default config;
