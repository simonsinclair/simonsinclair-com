const { test, expect } = require('@playwright/test');

test('page has expected title', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('title');
  await expect(title).toHaveText('Simon Sinclair');
});
