import { test, expect } from '@playwright/test';

const password = 'secret_sauce';

test('Login with Valid User', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill(password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
});

test('Login with Locked Out User', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill(password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Sorry, this user has been locked out');
});

test('Login with Nonexistent User', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('nonexistent_user');
  await page.locator('[data-test="password"]').fill(password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('Logout', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill(password);

  await page.locator('[data-test="login-button"]').click();

  await page.locator('#react-burger-menu-btn').click();

  await page.locator('#logout_sidebar_link').click();

  await expect(page).toHaveURL('/');
});