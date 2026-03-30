const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#themeToggle');
});

test.describe('Theme Toggle', () => {
  test('default theme is dark', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('clicking toggle switches to light theme', async ({ page }) => {
    await page.locator('#themeToggle').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('clicking toggle twice returns to dark', async ({ page }) => {
    await page.locator('#themeToggle').click();
    await page.locator('#themeToggle').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('theme icon changes on toggle', async ({ page }) => {
    const icon = page.locator('.theme-icon');
    await expect(icon).toHaveText('☀️');
    await page.locator('#themeToggle').click();
    await expect(icon).toHaveText('🌙');
    await page.locator('#themeToggle').click();
    await expect(icon).toHaveText('☀️');
  });

  test('theme is persisted in localStorage', async ({ page }) => {
    await page.locator('#themeToggle').click();
    const theme = await page.evaluate(() => localStorage.getItem('hajj-th'));
    expect(theme).toBe('light');
  });
});
