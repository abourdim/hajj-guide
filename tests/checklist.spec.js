const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  // Clear localStorage to start fresh
  await page.evaluate(() => localStorage.removeItem('hajj-ck'));
  await page.locator('.tab[data-tab="preparer"]').click();
  await page.waitForSelector('#checklistContainer .ck-item');
});

test.describe('Checklist', () => {
  test('checklist items are rendered', async ({ page }) => {
    const items = page.locator('#checklistContainer .ck-item');
    const count = await items.count();
    expect(count).toBeGreaterThan(10);
  });

  test('clicking an item toggles checked state', async ({ page }) => {
    const item = page.locator('#checklistContainer .ck-item').first();
    await expect(item).not.toHaveClass(/chk/);
    await item.click();
    await expect(item).toHaveClass(/chk/);
  });

  test('clicking a checked item unchecks it', async ({ page }) => {
    const item = page.locator('#checklistContainer .ck-item').first();
    await item.click();
    await expect(item).toHaveClass(/chk/);
    await item.click();
    await expect(item).not.toHaveClass(/chk/);
  });

  test('progress bar updates on check', async ({ page }) => {
    const textBefore = await page.locator('#progressText').textContent();
    const [checked] = textBefore.split('/').map(Number);
    expect(checked).toBe(0);

    await page.locator('#checklistContainer .ck-item').first().click();
    const textAfter = await page.locator('#progressText').textContent();
    const [checkedAfter] = textAfter.split('/').map(Number);
    expect(checkedAfter).toBe(1);
  });

  test('checked state is persisted in localStorage', async ({ page }) => {
    await page.locator('#checklistContainer .ck-item').first().click();
    const stored = await page.evaluate(() => localStorage.getItem('hajj-ck'));
    const parsed = JSON.parse(stored);
    const values = Object.values(parsed);
    expect(values.some(v => v === true)).toBeTruthy();
  });

  test('filter buttons show only matching category', async ({ page }) => {
    const allCount = await page.locator('#checklistContainer .ck-item').count();

    await page.locator('.fbtn[data-filter="documents"]').click();
    const docsCount = await page.locator('#checklistContainer .ck-item').count();
    expect(docsCount).toBeGreaterThan(0);
    expect(docsCount).toBeLessThan(allCount);

    await page.locator('.fbtn[data-filter="all"]').click();
    const resetCount = await page.locator('#checklistContainer .ck-item').count();
    expect(resetCount).toBe(allCount);
  });

  test('each filter button gets active class', async ({ page }) => {
    const filters = ['all', 'documents', 'vetements', 'sante', 'divers'];
    for (const f of filters) {
      await page.locator(`.fbtn[data-filter="${f}"]`).click();
      await expect(page.locator(`.fbtn[data-filter="${f}"]`)).toHaveClass(/active/);
      // Only one active at a time
      const activeCount = await page.locator('.fbtn.active').count();
      expect(activeCount).toBe(1);
    }
  });
});
