import { test, expect } from '@playwright/test';
import { KVHomePage } from '../pages/KVHomePage';
import { KVMainPage } from '../pages/KVMainPage';
import { CategoryPage } from '../pages/CategoryPage';

test('Количество товаров в категории Pleť больше 0', async ({ page }) => {
  const homePage = new KVHomePage(page);
  await homePage.goto();

  const mainPage = new KVMainPage(page);
  await mainPage.openCategory('Pleť');

  const categoryPage = new CategoryPage(page);
  const count = await categoryPage.getProductCount();
  console.log(`Количество товаров: ${count}`);
  expect(count).toBeGreaterThan(0);
});
