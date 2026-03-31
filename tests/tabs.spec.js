const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('.tab');
});

test.describe('Main Tab Navigation', () => {
  const tabs = [
    { tab: 'monhajj', panel: 'panel-monhajj' },
    { tab: 'apprendre', panel: 'panel-apprendre' },
    { tab: 'preparer', panel: 'panel-preparer' },
    { tab: 'plus', panel: 'panel-plus' },
  ];

  test('default tab is Mon Hajj', async ({ page }) => {
    const activeTab = page.locator('.tab.active');
    await expect(activeTab).toHaveCount(1);
    await expect(activeTab).toHaveAttribute('data-tab', 'monhajj');
    await expect(page.locator('#panel-monhajj')).toHaveClass(/active/);
  });

  for (const { tab, panel } of tabs) {
    test(`clicking "${tab}" tab activates correct panel`, async ({ page }) => {
      await page.locator(`.tab[data-tab="${tab}"]`).click();

      // Verify clicked tab is active
      await expect(page.locator(`.tab[data-tab="${tab}"]`)).toHaveClass(/active/);

      // Verify correct panel is active
      await expect(page.locator(`#${panel}`)).toHaveClass(/active/);

      // Verify other panels are NOT active
      for (const other of tabs) {
        if (other.tab !== tab) {
          await expect(page.locator(`#${other.panel}`)).not.toHaveClass(/active/);
        }
      }
    });
  }

  test('only one tab is active at a time', async ({ page }) => {
    for (const { tab } of tabs) {
      await page.locator(`.tab[data-tab="${tab}"]`).click();
      const activeCount = await page.locator('.tab.active').count();
      expect(activeCount).toBe(1);
    }
  });

  test('clicking tabs cycles through all panels', async ({ page }) => {
    for (const { tab, panel } of tabs) {
      await page.locator(`.tab[data-tab="${tab}"]`).click();
      await expect(page.locator(`#${panel}`)).toBeVisible();
    }
  });
});
