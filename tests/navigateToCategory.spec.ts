import { test, expect } from '@playwright/test';
import { KBVHomePage } from '../pages/KBVHomePage';
import { KBVMainPage } from '../pages/KBVMainPage';

test('Переход в категорию "Pleť"', async ({ page }) => {
  const homePage = new KBVHomePage(page);
  const mainPage = new KBVMainPage(page);

  await homePage.goto();
  await homePage.goToPletCategory();

  const header = await mainPage.getHeaderText();
  expect(header?.toLowerCase()).toContain('pleť');
});