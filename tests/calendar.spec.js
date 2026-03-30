const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('.tab[data-tab="preparer"]').click();
  await page.locator('.stab[data-sub="prep-dates"]').click();
  await page.waitForSelector('#datesContainer');
});

test.describe('Calendar Features', () => {
  test('dates section renders calendar grid', async ({ page }) => {
    const html = await page.locator('#datesContainer').innerHTML();
    expect(html).toContain('Mai 2026');
  });

  test('individual event Google Calendar links are valid', async ({ page }) => {
    const gcalLinks = page.locator('#datesContainer a[href*="calendar.google.com"]');
    const count = await gcalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await gcalLinks.nth(i).getAttribute('href');
      expect(href).toContain('action=TEMPLATE');
      expect(href).toContain('text=');
      expect(href).toContain('dates=');
    }
  });

  test('individual event Outlook links are valid', async ({ page }) => {
    const outlookLinks = page.locator('#datesContainer a[href*="outlook.live.com"]');
    const count = await outlookLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await outlookLinks.nth(i).getAttribute('href');
      expect(href).toContain('subject=');
    }
  });

  test('ICS download links exist', async ({ page }) => {
    const icsLinks = page.locator('#datesContainer a[download$=".ics"]');
    const count = await icsLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('add-all-to-Google button exists', async ({ page }) => {
    const btn = page.locator('button:has-text("Google Calendar")');
    await expect(btn).toBeVisible();
  });

  test('ICS bulk download button exists', async ({ page }) => {
    const btn = page.locator('button:has-text(".ics")');
    await expect(btn).toBeVisible();
  });

  test('ICS download creates a file', async ({ page }) => {
    // Monitor downloads
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.evaluate(() => downloadHajjICS()),
    ]);
    expect(download.suggestedFilename()).toContain('.ics');
  });

  test('event details panel expands on click', async ({ page }) => {
    const details = page.locator('#datesContainer details');
    if (await details.count() > 0) {
      await details.first().locator('summary').click();
      await expect(details.first()).toHaveAttribute('open', '');
    }
  });
});
