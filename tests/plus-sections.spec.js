const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('.tab[data-tab="plus"]').click();
  await page.waitForSelector('#plusGrid .explore-card');
});

test.describe('Plus Grid Navigation', () => {
  test('plus grid shows section cards', async ({ page }) => {
    const cards = page.locator('.explore-card');
    const count = await cards.count();
    expect(count).toBe(10);
  });

  test('plus grid shows 3 group titles', async ({ page }) => {
    const groups = page.locator('.explore-group-title');
    await expect(groups).toHaveCount(3);
  });

  const sections = ['faq', 'errors', 'practical', 'health', 'heat', 'handicap', 'tour', 'medina', 'links'];

  for (const section of sections) {
    test(`opening "${section}" section hides grid and shows content`, async ({ page }) => {
      await page.evaluate((id) => openPlusSection(id), section);
      await expect(page.locator('#plusGrid')).not.toBeVisible();
      await expect(page.locator('#plusContent')).toBeVisible();
      // Content should have a back button
      await expect(page.locator('.explore-back')).toBeVisible();
    });
  }

  test('back button returns to grid', async ({ page }) => {
    await page.evaluate(() => openPlusSection('faq'));
    await expect(page.locator('#plusContent')).toBeVisible();
    await page.locator('.explore-back').click();
    await expect(page.locator('#plusGrid')).toBeVisible();
    await expect(page.locator('#plusContent')).not.toBeVisible();
  });

  test('FAQ section has expandable questions', async ({ page }) => {
    await page.evaluate(() => openPlusSection('faq'));
    const questions = page.locator('#plusContent .fq');
    const count = await questions.count();
    expect(count).toBeGreaterThan(10);

    // Click a question to expand
    const firstQ = questions.first().locator('.fq-q');
    await firstQ.click();
    await expect(questions.first()).toHaveClass(/open/);

    // Click again to collapse
    await firstQ.click();
    await expect(questions.first()).not.toHaveClass(/open/);
  });
});
