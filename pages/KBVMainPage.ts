import { Page, Locator, expect } from '@playwright/test';

export class KBVMainPage {
  readonly page: Page;
  readonly menuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuButton = page.locator('[aria-controls="menu-drawer"]');
  }

  async openCategory(categoryName: string) {

    const categoryLink = this.page.locator('a.menu-list__link', {
      has: this.page.locator('span.menu-list__link-title', { hasText: categoryName })
    });
    await expect(categoryLink).toBeVisible({ timeout: 10000 });

    await categoryLink.click();
  }
}
