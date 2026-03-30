const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#globalSearch');
});

test.describe('Global Search', () => {
  test('search input is visible', async ({ page }) => {
    await expect(page.locator('#globalSearch')).toBeVisible();
  });

  test('typing filters elements by text content', async ({ page }) => {
    // Switch to Apprendre to have step-cards visible
    await page.locator('.tab[data-tab="apprendre"]').click();
    await page.waitForSelector('.step-card');

    const totalBefore = await page.locator('.step-card:visible').count();
    expect(totalBefore).toBeGreaterThan(0);

    // Search for a specific term
    await page.locator('#globalSearch').fill('Ihram');
    // Wait for debounce (300ms)
    await page.waitForTimeout(400);

    const visibleAfter = await page.locator('.step-card:visible').count();
    expect(visibleAfter).toBeLessThan(totalBefore);
    expect(visibleAfter).toBeGreaterThan(0);
  });

  test('clearing search restores all elements', async ({ page }) => {
    await page.locator('.tab[data-tab="apprendre"]').click();
    await page.waitForSelector('.step-card');

    const totalBefore = await page.locator('.step-card:visible').count();

    await page.locator('#globalSearch').fill('Ihram');
    await page.waitForTimeout(400);

    await page.locator('#globalSearch').fill('');
    await page.waitForTimeout(400);

    const totalAfter = await page.locator('.step-card:visible').count();
    expect(totalAfter).toBe(totalBefore);
  });

  test('search with no results hides all filterable elements', async ({ page }) => {
    await page.locator('.tab[data-tab="apprendre"]').click();
    await page.waitForSelector('.step-card');

    await page.locator('#globalSearch').fill('xyznonexistent123');
    await page.waitForTimeout(400);

    const visible = await page.locator('.step-card:visible').count();
    expect(visible).toBe(0);
  });
});
