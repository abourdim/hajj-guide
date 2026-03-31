const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Accessibility', () => {
  test('theme toggle button has aria-label', async ({ page }) => {
    await expect(page.locator('#themeToggle')).toHaveAttribute('aria-label');
  });

  test('help button has aria-label and aria-expanded', async ({ page }) => {
    const btn = page.locator('#helpBtn');
    await expect(btn).toHaveAttribute('aria-label');
    await expect(btn).toHaveAttribute('aria-expanded');
  });

  test('dua button has aria-label and aria-expanded', async ({ page }) => {
    const btn = page.locator('#duaBtn');
    await expect(btn).toHaveAttribute('aria-label');
    await expect(btn).toHaveAttribute('aria-expanded');
  });

  test('scroll-top button has aria-label', async ({ page }) => {
    await expect(page.locator('#scrollTop')).toHaveAttribute('aria-label');
  });

  test('main tabs nav has role=tablist', async ({ page }) => {
    await expect(page.locator('#mainTabs')).toHaveAttribute('role', 'tablist');
  });

  test('search input has associated label', async ({ page }) => {
    const label = page.locator('label[for="globalSearch"]');
    await expect(label).toHaveCount(1);
  });

  test('noscript element exists', async ({ page }) => {
    const noscript = await page.evaluate(() =>
      document.querySelector('noscript') !== null
    );
    expect(noscript).toBeTruthy();
  });

  test('html has lang attribute', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  });

  test('static external links have rel=noopener', async ({ page }) => {
    // Check the footer powered-by link (static in index.html)
    const footerLink = page.locator('footer a[target="_blank"]');
    const count = await footerLink.count();
    for (let i = 0; i < count; i++) {
      const rel = await footerLink.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
    }
  });

  test('meta description exists', async ({ page }) => {
    const desc = await page.evaluate(() =>
      document.querySelector('meta[name="description"]')?.content
    );
    expect(desc).toBeTruthy();
    expect(desc.length).toBeGreaterThan(20);
  });

  test('Open Graph tags exist', async ({ page }) => {
    const ogTitle = await page.evaluate(() =>
      document.querySelector('meta[property="og:title"]')?.content
    );
    expect(ogTitle).toBeTruthy();

    const ogDesc = await page.evaluate(() =>
      document.querySelector('meta[property="og:description"]')?.content
    );
    expect(ogDesc).toBeTruthy();
  });

  test('page title is set', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('Hajj');
  });
});
