const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('.tab');
});

test.describe('Apprendre Sub-Tabs', () => {
  const subTabs = [
    'learn-steps', 'learn-days', 'learn-rituals', 'learn-duas',
    'learn-clothing', 'learn-classif', 'learn-types', 'learn-map',
  ];

  test.beforeEach(async ({ page }) => {
    await page.locator('.tab[data-tab="apprendre"]').click();
  });

  test('default sub-tab is learn-steps', async ({ page }) => {
    await expect(page.locator('#sub-learn-steps')).toHaveClass(/active/);
  });

  for (const sub of subTabs) {
    test(`clicking "${sub}" sub-tab shows correct sub-panel`, async ({ page }) => {
      await page.locator(`.stab[data-sub="${sub}"]`).click();
      await expect(page.locator(`.stab[data-sub="${sub}"]`)).toHaveClass(/active/);
      await expect(page.locator(`#sub-${sub}`)).toHaveClass(/active/);
    });
  }

  test('only one sub-tab active at a time', async ({ page }) => {
    for (const sub of subTabs) {
      // Some sub-tabs may be overflowed — use JS click to avoid visibility issues
      await page.evaluate((s) => {
        document.querySelector(`.stab[data-sub="${s}"]`).click();
      }, sub);
      const panel = page.locator('#panel-apprendre');
      const activeSubPanels = panel.locator('.sub-panel.active');
      await expect(activeSubPanels).toHaveCount(1);
    }
  });
});

test.describe('Préparer Sub-Tabs', () => {
  const subTabs = [
    'prep-checklist', 'prep-dates', 'prep-costs', 'prep-apps', 'prep-nusuk',
  ];

  test.beforeEach(async ({ page }) => {
    await page.locator('.tab[data-tab="preparer"]').click();
  });

  test('default sub-tab is prep-checklist', async ({ page }) => {
    await expect(page.locator('#sub-prep-checklist')).toHaveClass(/active/);
  });

  for (const sub of subTabs) {
    test(`clicking "${sub}" sub-tab shows correct sub-panel`, async ({ page }) => {
      await page.locator(`.stab[data-sub="${sub}"]`).click();
      await expect(page.locator(`.stab[data-sub="${sub}"]`)).toHaveClass(/active/);
      await expect(page.locator(`#sub-${sub}`)).toHaveClass(/active/);
    });
  }
});
