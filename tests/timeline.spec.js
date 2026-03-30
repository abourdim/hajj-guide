const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('.tab[data-tab="apprendre"]').click();
  await page.locator('.stab[data-sub="learn-days"]').click();
  await page.waitForSelector('.tl-card');
});

test.describe('Timeline Cards', () => {
  test('timeline cards are rendered', async ({ page }) => {
    const cards = page.locator('.tl-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(3);
  });

  test('clicking a timeline card expands it', async ({ page }) => {
    const card = page.locator('.tl-card').first();
    await expect(card).not.toHaveClass(/expanded/);
    await card.click();
    await expect(card).toHaveClass(/expanded/);
  });

  test('clicking expanded card collapses it', async ({ page }) => {
    const card = page.locator('.tl-card').first();
    await card.click();
    await expect(card).toHaveClass(/expanded/);
    await card.click();
    await expect(card).not.toHaveClass(/expanded/);
  });

  test('expanded card shows details with steps', async ({ page }) => {
    const card = page.locator('.tl-card').first();
    await card.click();
    const steps = card.locator('.tl-step');
    const count = await steps.count();
    expect(count).toBeGreaterThan(0);
  });

  test('each card has title and summary', async ({ page }) => {
    const cards = page.locator('.tl-card');
    const count = await cards.count();
    for (let i = 0; i < Math.min(count, 3); i++) {
      const title = await cards.nth(i).locator('.tl-name').textContent();
      expect(title.length).toBeGreaterThan(0);
      const summary = await cards.nth(i).locator('.tl-sum').textContent();
      expect(summary.length).toBeGreaterThan(0);
    }
  });
});
