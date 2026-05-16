import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

  reporter: [
    ['html']
  ]
});