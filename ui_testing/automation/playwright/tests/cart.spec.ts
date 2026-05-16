
import { test, expect } from '@playwright/test';

const password = 'secret_sauce';

test('Purchase Product', async ({ page }) => {
    await page.goto('/');
  
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill(password);
  
    await page.locator('[data-test="login-button"]').click();
  
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
  
    await page.locator('[data-test="firstName"]').fill('Jorge');
    await page.locator('[data-test="lastName"]').fill('Tester');
    await page.locator('[data-test="postalCode"]').fill('12345678');
    await page.locator('[data-test="continue"]').click();
  
    await page.locator('[data-test="finish"]').click();
  
    await expect(page).toHaveURL('/checkout-complete.html');
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!');
  
  
  });