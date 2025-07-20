import { Page, Locator } from '@playwright/test';

export class KBVHomePage {
  readonly page: Page;
  readonly acceptCookiesButton: Locator;
  readonly searchButton: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.locator('button:has-text"Souhlasim")');
    this.searchButton = page.locator('button[aria-label="Vyhledávání"]');
    this.searchInput = page.locator('input[type="search"]');
  }

  async goto() {
    await this.page.goto('https://kosmetikabezvody.cz/');
    if (await this.acceptCookiesButton.isVisible()) {
      await this.acceptCookiesButton.click();
    }
  }
  async acceptCookies() {
  if (await this.acceptCookiesButton.isVisible({ timeout: 5000 })) {
    await this.acceptCookiesButton.click();
  }
}
  async goToPletCategory() {
    const link = this.page.locator('a[href="/collections/plet"]').first();
    await link.click(); 
  }

  async search(term: string) {
    await this.searchButton.click();
    await this.searchInput.fill(term);
    await this.page.keyboard.press('Enter');
  }
}