import { test, expect } from '@playwright/test';
import { KBVHomePage } from '../pages/KBVHomePage';
import { KBVMainPage } from '../pages/KBVMainPage';

test('Открыть категорию Pleť', async ({ page }) => {
  const homePage = new KBVHomePage(page);
  await homePage.goto();

  const mainPage = new KBVMainPage(page);
  await mainPage.openCategory('Pleť');

  await expect(page).toHaveURL(/.*plet.*/i);
});