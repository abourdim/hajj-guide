const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#scrollTop', { state: 'attached' });
});

test.describe('Scroll Behavior', () => {
  test('scroll-top button is hidden initially', async ({ page }) => {
    await expect(page.locator('#scrollTop')).not.toHaveClass(/visible/);
  });

  test('scroll-top button appears after scrolling down', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(200);
    await expect(page.locator('#scrollTop')).toHaveClass(/visible/);
  });

  test('scroll-top button disappears when scrolling back up', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);
    await expect(page.locator('#scrollTop')).not.toHaveClass(/visible/);
  });

  test('clicking scroll-top scrolls to top', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(200);
    await page.locator('#scrollTop').click();
    await page.waitForTimeout(500);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(50);
  });
});

test.describe('Header Search Toggle', () => {
  test('search bar is hidden by default', async ({ page }) => {
    await expect(page.locator('#headerSearch')).toHaveClass(/hidden/);
  });

  test('clicking search icon shows search bar', async ({ page }) => {
    await page.locator('#searchToggle').click();
    await expect(page.locator('#headerSearch')).not.toHaveClass(/hidden/);
  });

  test('clicking search icon again hides search bar', async ({ page }) => {
    await page.locator('#searchToggle').click();
    await page.locator('#searchToggle').click();
    await expect(page.locator('#headerSearch')).toHaveClass(/hidden/);
  });

  test('search input gets focus when opened', async ({ page }) => {
    await page.locator('#searchToggle').click();
    await page.waitForTimeout(100);
    const focused = await page.evaluate(() => document.activeElement.id);
    expect(focused).toBe('globalSearch');
  });
});
