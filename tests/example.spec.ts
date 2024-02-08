import { test, expect } from "@playwright/test";

test("shows text from backend", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toContainText("yo!");
});
