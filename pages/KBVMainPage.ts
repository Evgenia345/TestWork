import { Page, Locator } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly navMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navMenu = page.locator('nav');
  }

  async openCategory(categoryName: string) {
    await this.navMenu.getByRole('link', { name: categoryName }).click();
  }
}
