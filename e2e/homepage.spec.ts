import { test, expect } from "@playwright/test";

test("homepage renders the portfolio sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Обо мне" })).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Опыт работы" }),
  ).toBeVisible();
});

test("public contact links are present", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.locator('a[href="https://t.me/emilayupov"]'),
  ).toBeAttached();

  await expect(page.locator('a[href^="mailto:"]')).toBeAttached();
});
