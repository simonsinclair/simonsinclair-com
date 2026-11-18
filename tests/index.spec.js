const { test, expect } = require('@playwright/test');

test('page has expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Simon Sinclair');
});
