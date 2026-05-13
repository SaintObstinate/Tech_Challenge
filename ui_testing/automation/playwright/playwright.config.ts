import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  reporter: [
    ['html']
  ]
});