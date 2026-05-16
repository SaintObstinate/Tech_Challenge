import { test, expect } from '@playwright/test';

test('should create auth token', async ({ request }) => {

  const response = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: {
        username: 'admin',
        password: 'password123'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.token).toBeTruthy();
});