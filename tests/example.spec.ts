import { test, expect } from "@playwright/test";

test("shows text from backend", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toContainText("Message from backend: yo!");
});

// https://github.com/elysiajs/elysia-cors/issues/47
test.skip("works with actions", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Name").fill("user");
  await page.getByRole("button", { name: "Greet me" }).click();
  await expect(page.locator("body")).toContainText("hi, user");
});
