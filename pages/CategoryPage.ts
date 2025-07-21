import { Page, Locator } from '@playwright/test';

export class CategoryPage {
  readonly page: Page;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('.product'); // уточни селектор при необходимости
  }

  async isAnyProductVisible(): Promise<boolean> {
    return await this.productCards.first().isVisible();
  }

  async getProductCount(): Promise<number> {
    return await this.productCards.count();
  }
}