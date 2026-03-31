const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('.tab[data-tab="plus"]').click();
  await page.waitForSelector('.explore-card');
  // Click the Quiz/flashcards card
  await page.evaluate(() => openPlusSection('flashcards'));
  await page.waitForSelector('#plusContent .fc');
});

test.describe('Flashcard Quiz', () => {
  test('flashcard is rendered with question', async ({ page }) => {
    const question = page.locator('#plusContent .fc-q');
    const text = await question.textContent();
    expect(text.length).toBeGreaterThan(0);
  });

  test('clicking flashcard flips it', async ({ page }) => {
    const fc = page.locator('#plusContent .fc');
    await expect(fc).not.toHaveClass(/flip/);
    await fc.click();
    await expect(fc).toHaveClass(/flip/);
  });

  test('clicking flipped card flips back', async ({ page }) => {
    const fc = page.locator('#plusContent .fc');
    await fc.click();
    await expect(fc).toHaveClass(/flip/);
    await fc.click();
    await expect(fc).not.toHaveClass(/flip/);
  });

  test('counter shows current position', async ({ page }) => {
    const counter = page.locator('#xfcC');
    const text = await counter.textContent();
    expect(text).toMatch(/^1\/\d+$/);
  });

  test('next button advances counter', async ({ page }) => {
    await page.evaluate(() => xfcN());
    await page.waitForSelector('.fc');
    const counter = page.locator('#xfcC');
    const text = await counter.textContent();
    expect(text).toMatch(/^2\/\d+$/);
  });

  test('prev button goes backward', async ({ page }) => {
    // Go to card 2
    await page.evaluate(() => xfcN());
    await page.waitForSelector('.fc');
    // Go back to card 1
    await page.evaluate(() => xfcP());
    await page.waitForSelector('.fc');
    const counter = page.locator('#xfcC');
    const text = await counter.textContent();
    expect(text).toMatch(/^1\/\d+$/);
  });

  test('shuffle resets counter to 1', async ({ page }) => {
    await page.evaluate(() => xfcN());
    await page.evaluate(() => xfcN());
    await page.waitForSelector('.fc');
    await page.evaluate(() => xfcS());
    await page.waitForSelector('.fc');
    const counter = page.locator('#xfcC');
    const text = await counter.textContent();
    expect(text).toMatch(/^1\/\d+$/);
  });

  test('back button returns to plus grid', async ({ page }) => {
    await page.locator('.explore-back').click();
    await expect(page.locator('#plusGrid')).toBeVisible();
    await expect(page.locator('#plusContent')).not.toBeVisible();
  });
});
