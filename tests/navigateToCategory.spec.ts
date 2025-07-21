import { test, expect } from '@playwright/test';
import { KVHomePage } from '../pages/KVHomePage';
import { KVMainPage } from '../pages/KVMainPage';

test('Открыть категорию Pleť', async ({ page }) => {
  const homePage = new KVHomePage(page);
  await homePage.goto();

  const mainPage = new KVMainPage(page);
  await mainPage.openCategory('Pleť');

  await expect(page).toHaveURL(/.*plet.*/i);
});