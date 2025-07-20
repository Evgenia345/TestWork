import { test, expect } from '@playwright/test';
import { KBVHomePage } from '../pages/KBVHomePage';
import { KBVMainPage } from '../pages/KBVMainPage';

test('Поиск товара через строку поиска', async ({ page }) => {
  const homePage = new KBVHomePage(page);
  const mainPage = new KBVMainPage(page);

  await homePage.goto();
  await homePage.search('olej'); // Поиск по ключевому слову

  expect(await mainPage.isProductListVisible()).toBeTruthy();
});
