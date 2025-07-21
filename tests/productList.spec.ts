import { test, expect } from '@playwright/test';
import { KBVHomePage } from '../pages/KBVHomePage';
import { KBVMainPage } from '../pages/KBVMainPage';

test('Проверка отображения товаров в категории', async ({ page }) => {
  const homePage = new KBVHomePage(page);
  const mainPage = new KBVMainPage(page);

  await homePage.goto();
  await homePage.goToPletCategory();

  const productVisible = await mainPage.isProductListVisible();
  expect(productVisible).toBeTruthy();

  const productTitle = await mainPage.getFirstProductTitle();
  expect(productTitle).not.toBeNull();
});
