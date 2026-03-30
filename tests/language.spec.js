const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('.lang-opt');
});

test.describe('Language Switch', () => {
  test('default language is French', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  });

  test('switching to Arabic sets lang and dir', async ({ page }) => {
    await page.locator('.lang-opt[data-lang="ar"]').click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });

  test('switching back to French restores lang and dir', async ({ page }) => {
    await page.locator('.lang-opt[data-lang="ar"]').click();
    await page.locator('.lang-opt[data-lang="fr"]').click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  });

  test('Arabic button gets active class when selected', async ({ page }) => {
    await page.locator('.lang-opt[data-lang="ar"]').click();
    await expect(page.locator('.lang-opt[data-lang="ar"]')).toHaveClass(/active/);
    await expect(page.locator('.lang-opt[data-lang="fr"]')).not.toHaveClass(/active/);
  });

  test('UI text translates to Arabic', async ({ page }) => {
    await page.locator('.lang-opt[data-lang="ar"]').click();
    await expect(page.locator('#tabMonHajj')).toHaveText('حجّي');
    await expect(page.locator('#logoTitle')).toHaveText('دليل الحج');
  });

  test('UI text translates back to French', async ({ page }) => {
    await page.locator('.lang-opt[data-lang="ar"]').click();
    await page.locator('.lang-opt[data-lang="fr"]').click();
    await expect(page.locator('#tabApprendre')).toHaveText('Apprendre');
    await expect(page.locator('#logoTitle')).toHaveText('Guide du Hajj');
  });

  test('language persisted in localStorage', async ({ page }) => {
    await page.locator('.lang-opt[data-lang="ar"]').click();
    const lang = await page.evaluate(() => localStorage.getItem('hajj-lang'));
    expect(lang).toBe('ar');
  });
});
