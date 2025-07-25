import { test, expect } from '@playwright/test';
import { KBVHomePage } from '../pages/KBVHomePage';
import { KBVMainPage } from '../pages/KBVMainPage';
import { CategoryPage } from '../pages/CategoryPage';

test('Переход на карточку товара открывает страницу с данными', async ({ page }) => {
  const homePage = new KBVHomePage(page);
  await homePage.goto();

  const mainPage = new KBVMainPage(page);
  await mainPage.openCategory('Pleť');

  const categoryPage = new CategoryPage(page);
  const productCount = await categoryPage.getProductCount();
  expect(productCount).toBeGreaterThan(0);

  await categoryPage.openFirstProduct();
  await categoryPage.expectProductDetailsVisible();

});


