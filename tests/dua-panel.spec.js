const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#duaBtn');
});

test.describe('Dua Panel', () => {
  test('dua panel is hidden by default', async ({ page }) => {
    await expect(page.locator('#duaPanel')).toHaveClass(/hidden/);
  });

  test('clicking dua button opens panel', async ({ page }) => {
    await page.locator('#duaBtn').click();
    await expect(page.locator('#duaPanel')).not.toHaveClass(/hidden/);
  });

  test('clicking dua button again closes panel', async ({ page }) => {
    await page.locator('#duaBtn').click();
    await page.locator('#duaBtn').click();
    await expect(page.locator('#duaPanel')).toHaveClass(/hidden/);
  });

  test('aria-expanded updates on toggle', async ({ page }) => {
    await expect(page.locator('#duaBtn')).toHaveAttribute('aria-expanded', 'false');
    await page.locator('#duaBtn').click();
    await expect(page.locator('#duaBtn')).toHaveAttribute('aria-expanded', 'true');
    await page.locator('#duaBtn').click();
    await expect(page.locator('#duaBtn')).toHaveAttribute('aria-expanded', 'false');
  });

  test('panel contains 6 essential duas', async ({ page }) => {
    await page.locator('#duaBtn').click();
    const items = page.locator('#duaPanelContent .dua-item');
    await expect(items).toHaveCount(6);
  });

  test('each dua has Arabic text', async ({ page }) => {
    await page.locator('#duaBtn').click();
    const arabicTexts = page.locator('#duaPanelContent .dua-item-ar');
    const count = await arabicTexts.count();
    expect(count).toBe(6);
    for (let i = 0; i < count; i++) {
      const text = await arabicTexts.nth(i).textContent();
      expect(text.length).toBeGreaterThan(0);
    }
  });

  test('close button closes panel', async ({ page }) => {
    await page.locator('#duaBtn').click();
    await page.locator('#duaPanel .dua-panel-header button').click();
    await expect(page.locator('#duaPanel')).toHaveClass(/hidden/);
  });
});
