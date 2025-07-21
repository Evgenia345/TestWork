import { test, expect } from '@playwright/test';
import { KVHomePage } from '../pages/KVHomePage';
import { KVMainPage } from '../pages/KVsMainPage';
import { CategoryPage } from '../pages/CategoryPage';

test('В категории Pleť есть хотя бы один товар', async ({ page }) => {
  const homePage = new KVHomePage(page);
  await homePage.goto();

  const mainPage = new KVMainPage(page);
  await mainPage.openCategory('Pleť');

  const categoryPage = new CategoryPage(page);
  expect(await categoryPage.isAnyProductVisible()).toBe(true);
});
