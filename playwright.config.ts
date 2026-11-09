import { defineConfig, devices } from "@playwright/test";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner, repo] = repository.split("/");
const isUserOrOrgSite = repo === `${owner}.github.io`;

const basePath = owner && repo && !isUserOrOrgSite ? `/${repo}/` : "/";
const baseURL = `http://127.0.0.1:4321${basePath}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",

  use: {
    baseURL,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "npm run preview -- --host 127.0.0.1",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
