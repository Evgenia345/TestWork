import { test, expect } from '@playwright/test';
import { KBVHomePage } from '../pages/KBVHomePage';
import { KBVMainPage } from '../pages/KBVMainPage';
import { CategoryPage } from '../pages/CategoryPage';

test('В категории Pleť есть хотя бы один товар', async ({ page }) => {
  const homePage = new KBVHomePage(page);
  await homePage.goto();

  const mainPage = new KBVMainPage(page);
  await mainPage.openCategory('Pleť');

  const categoryPage = new CategoryPage(page);
  expect(await categoryPage.isAnyProductVisible()).toBe(true);
});
