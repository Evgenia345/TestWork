import { Page, Locator } from '@playwright/test';

export class KBVMainPage {
  readonly page: Page;
  readonly categoryHeader: Locator;
  readonly productCards: Locator;


  constructor(page: Page) {
    this.page = page;
    this.categoryHeader = page.locator('h1');
    this.productCards = page.locator('.product-card');
  }

  async getHeaderText(): Promise<string | null> {
    return await this.categoryHeader.textContent();
  } 
  async isProductListVisible(): Promise<boolean> {
    return await this.productCards.first().isVisible();
  }

  async getFirstProductTitle(): Promise<string | null> {
    return await this.productCards.nth(0).locator('.product-title').textContent();
  }
}