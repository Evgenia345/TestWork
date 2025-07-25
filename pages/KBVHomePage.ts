import { Page, Locator } from '@playwright/test';

export class KBVHomePage {
  readonly page: Page;
  readonly cookieButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieButton = page.getByRole('button', { name: /Souhlasím/i });
  }

  async goto() {
    await this.page.goto('/');
    await this.acceptCookies();
  }

  async acceptCookies() {
   await this.page.waitForTimeout(2000);
   try {
     const isVisible = await this.cookieButton.isVisible();
     console.log(`Cookie button visible: ${isVisible}`);
     if (isVisible) {
        await this.cookieButton.click();
        console.log('Clicked cookie button');
      }
    } catch (e) {
      console.error('Error while trying to accept cookies:', e);
    } 
  }
}
