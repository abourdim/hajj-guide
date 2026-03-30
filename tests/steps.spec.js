const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.removeItem('hajj-done'));
  await page.locator('.tab[data-tab="apprendre"]').click();
  await page.locator('.stab[data-sub="learn-steps"]').click();
  await page.waitForSelector('.step-card');
});

test.describe('Step-by-Step Cards', () => {
  test('step cards are rendered', async ({ page }) => {
    const cards = page.locator('.step-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(10);
  });

  test('clicking step header expands card', async ({ page }) => {
    const card = page.locator('.step-card').first();
    await expect(card).not.toHaveClass(/open/);
    await card.locator('.step-head').click();
    await expect(card).toHaveClass(/open/);
  });

  test('clicking expanded step header collapses card', async ({ page }) => {
    const card = page.locator('.step-card').first();
    await card.locator('.step-head').click();
    await expect(card).toHaveClass(/open/);
    await card.locator('.step-head').click();
    await expect(card).not.toHaveClass(/open/);
  });

  test('double-clicking step header marks it done', async ({ page }) => {
    const card = page.locator('.step-card').first();
    await card.locator('.step-head').dblclick();
    // After re-render, the card should have done class
    await expect(page.locator('.step-card').first()).toHaveClass(/done/);
  });

  test('done state is persisted in localStorage', async ({ page }) => {
    await page.locator('.step-card').first().locator('.step-head').dblclick();
    const stored = await page.evaluate(() => localStorage.getItem('hajj-done'));
    const parsed = JSON.parse(stored);
    expect(Object.keys(parsed).length).toBeGreaterThan(0);
  });

  test('progress bar shows completion count', async ({ page }) => {
    const progText = page.locator('.sbs-ptxt');
    await expect(progText).toContainText('/22');
  });
});
