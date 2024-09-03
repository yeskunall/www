/* eslint-disable @typescript-eslint/triple-slash-reference */

/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  // https://github.com/milesmcc/shynet/blob/0eb37141499515eef4fe787bfced53d02b1b4c8f/shynet/analytics/templates/analytics/scripts/page.js#L50
  Shynet: {
    readonly dnt: boolean;
    heartbeatTaskId: NodeJS.Timeout | undefined;
    idempotency: string | undefined;
    readonly newPageLoad: () => void;
    readonly sendHeartbeat: () => void;
    skipHeartbeat: boolean;
  };
}
