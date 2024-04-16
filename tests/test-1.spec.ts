import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('selenium');
  await page.getByPlaceholder('Search docs').press('Enter');
  await page.getByRole('heading', { name: 'Selenium Grid (experimental)' }).click();
  await page.getByRole('heading', { name: 'Selenium Grid (experimental)' }).click({
    button: 'right'
  });
  await page.getByRole('heading', { name: 'Selenium Grid (experimental)' }).click();
  await expect(page.getByRole('heading', { name: 'Selenium Grid (experimental)' })).toBeVisible();
});