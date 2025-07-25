import { Page, Locator, expect } from '@playwright/test';

export class CategoryPage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly firstProductCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('[data-testid="group-block"]');
    this.firstProductCard = this.productCards.first(); 
  }

  async getProductCount(): Promise<number> {
    await this.page.waitForSelector('.product-grid-view-zoom-out--details', { timeout: 10000, state: 'attached' });
    const items = this.page.locator('.product-grid-view-zoom-out--details');
    const count = await items.count();
    console.log(`Найдено товаров: ${count}`);
    return count; 
  }
  async isAnyProductVisible(): Promise<boolean> {
    const productTitle = this.page.locator('[data-testid="group-block"] >> text=/./');
    const count = await productTitle.count();
    console.log(`Найдено заголовков товаров: ${count}`);
    return count > 0;
  }
  async openFirstProduct() {
    const firstProduct = this.firstProductCard;
    await firstProduct.waitFor({ state: 'visible', timeout: 10000 });

    await this.page.screenshot({ path: 'before-click.png', fullPage: true });

    
    const title = firstProduct.locator('p');
    await title.waitFor({ state: 'visible', timeout: 5000 });
    await title.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectProductDetailsVisible() {
    await expect(this.page.locator('h1.product__title')).toBeVisible({ timeout: 15000 });
    await expect(this.page.locator('.price__regular')).toBeVisible();
  }
}