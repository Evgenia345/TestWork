import { test, expect } from '@playwright/test';
import { KBVHomePage } from '../pages/KBVHomePage';
import { KBVMainPage } from '../pages/KBVMainPage';
import { CategoryPage } from '../pages/CategoryPage';

test('Количество товаров в категории Pleť больше 0', async ({ page }) => {
  const homePage = new KBVHomePage(page);
  await homePage.goto();

  const mainPage = new KBVMainPage(page);
  await mainPage.openCategory('Pleť');

  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  const categoryPage = new CategoryPage(page);
  const count = await categoryPage.getProductCount();
  console.log(`Количество товаров: ${count}`);
  expect(count).toBeGreaterThan(0);
});
