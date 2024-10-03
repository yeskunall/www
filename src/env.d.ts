/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  umami: {
    identify(properties: Record<string, unknown>): void;
  };
}
