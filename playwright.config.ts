import { defineConfig, devices } from "@playwright/test";

const ASTRO_PORT = 4321;

// require('dotenv').config();

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,
  // Retry on CI ONLY
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  use: {
    baseURL: `http://localhost:${ASTRO_PORT}`,
    trace: "on-first-retry",
  },
  // Playwright is timing out for some reason
  // TODO(yeskunall): figure this out
  // webServer: {},
});
