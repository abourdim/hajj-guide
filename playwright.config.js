const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 15000,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3847',
    headless: true,
    viewport: { width: 1280, height: 800 },
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
  webServer: {
    command: 'npx serve -l 3847 --no-clipboard',
    port: 3847,
    reuseExistingServer: true,
  },
});
