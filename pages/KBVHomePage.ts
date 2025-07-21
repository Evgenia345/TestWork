import { Page, Locator } from '@playwright/test';

export class KVHomePage {
  readonly page: Page;
  readonly cookieButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieButton = page.locator('button:has-text("Souhlasím")');
  }

  async goto() {
    await this.page.goto('/');
    await this.acceptCookies();
  }

  async acceptCookies() {
    if (await this.cookieButton.isVisible()) {
      await this.cookieButton.click();
    }
  }
}
