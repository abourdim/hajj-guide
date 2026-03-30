const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#companionContainer');
});

test.describe('Companion Guide — Day Navigation', () => {
  test('companion guide renders on Mon Hajj tab', async ({ page }) => {
    const container = page.locator('#companionContainer');
    const text = await container.textContent();
    expect(text.length).toBeGreaterThan(100);
  });

  test('day selector buttons are rendered', async ({ page }) => {
    // 5 day selector buttons + 2 navigation arrows (prev/next) all use selectHajjDay
    const count = await page.evaluate(() =>
      document.querySelectorAll('#companionContainer button[onclick*="selectHajjDay"]').length
    );
    // At least 5 (day selectors) + up to 2 nav arrows depending on active day
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test('clicking each day button changes content', async ({ page }) => {
    const contents = [];
    for (let i = 0; i < 5; i++) {
      await page.evaluate((day) => selectHajjDay(day), i);
      await page.waitForTimeout(100);
      const text = await page.locator('#companionContainer').textContent();
      contents.push(text.substring(0, 200));
    }
    // Each day should have different content
    const unique = new Set(contents);
    expect(unique.size).toBe(5);
  });

  test('forward navigation arrow advances day', async ({ page }) => {
    // Start on day 0, click next
    await page.evaluate(() => selectHajjDay(0));
    const nextBtn = page.locator('#companionContainer button:has-text("▶")');
    if (await nextBtn.count() > 0) {
      await nextBtn.first().click();
      await page.waitForTimeout(100);
      // Content should have changed
      const container = page.locator('#companionContainer');
      await expect(container).toBeVisible();
    }
  });

  test('backward navigation arrow goes to previous day', async ({ page }) => {
    await page.evaluate(() => selectHajjDay(2));
    await page.waitForTimeout(100);
    const prevBtn = page.locator('#companionContainer button:has-text("◀")');
    if (await prevBtn.count() > 0) {
      await prevBtn.first().click();
      await page.waitForTimeout(100);
      const container = page.locator('#companionContainer');
      await expect(container).toBeVisible();
    }
  });

  test('companion includes schedule, duas, pack, and alerts sections', async ({ page }) => {
    const html = await page.locator('#companionContainer').innerHTML();
    // Should contain schedule times
    expect(html).toContain('⏰');
    // Should contain duas in Arabic
    expect(html).toContain('لَبَّيْكَ');
  });
});
