import { defineConfig } from '@playwright/test';

export default defineConfig({

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://kosmetikabezvody.cz',
  }

})