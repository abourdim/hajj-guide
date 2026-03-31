const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 20000,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3847',
    headless: true,
    viewport: { width: 1280, height: 800 },
    storageState: 'tests/storage-state.json',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
  webServer: {
    command: '/tmp/node-v22.12.0-darwin-x64/bin/node node_modules/.bin/serve -l 3847 --no-clipboard',
    port: 3847,
    reuseExistingServer: true,
  },
});
