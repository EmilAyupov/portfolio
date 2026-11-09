import { test, expect } from "@playwright/test";

test("homepage loads successfully", async ({ page }) => {
  await page.goto("/");

  console.log("PAGE URL:", page.url());
  console.log("PAGE TITLE:", await page.title());
  console.log(
    "PAGE CONTENT:",
    (await page.locator("body").innerText()).slice(0, 3000),
  );

  await expect(page.locator("body")).not.toBeEmpty();
});
