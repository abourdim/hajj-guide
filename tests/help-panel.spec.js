const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#helpBtn');
});

test.describe('Help Panel', () => {
  test('help panel is hidden by default', async ({ page }) => {
    await expect(page.locator('#helpPanel')).toHaveClass(/hidden/);
  });

  test('clicking help button opens panel', async ({ page }) => {
    await page.locator('#helpBtn').click();
    await expect(page.locator('#helpPanel')).not.toHaveClass(/hidden/);
  });

  test('clicking help button again closes panel', async ({ page }) => {
    await page.locator('#helpBtn').click();
    await page.locator('#helpBtn').click();
    await expect(page.locator('#helpPanel')).toHaveClass(/hidden/);
  });

  test('aria-expanded updates on toggle', async ({ page }) => {
    await expect(page.locator('#helpBtn')).toHaveAttribute('aria-expanded', 'false');
    await page.locator('#helpBtn').click();
    await expect(page.locator('#helpBtn')).toHaveAttribute('aria-expanded', 'true');
    await page.locator('#helpBtn').click();
    await expect(page.locator('#helpBtn')).toHaveAttribute('aria-expanded', 'false');
  });

  test('help panel contains guide items', async ({ page }) => {
    await page.locator('#helpBtn').click();
    const items = page.locator('#helpBody .help-item');
    await expect(items).toHaveCount(8);
  });

  test('close button inside panel closes it', async ({ page }) => {
    await page.locator('#helpBtn').click();
    await expect(page.locator('#helpPanel')).not.toHaveClass(/hidden/);
    await page.locator('#helpPanel .help-panel-header button').click();
    await expect(page.locator('#helpPanel')).toHaveClass(/hidden/);
  });
});
