import { test, expect } from '@playwright/test';

test('should create booking', async ({ request }) => {

  const response = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'Bruno',
        lastname: 'QA',
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-05-16',
          checkout: '2026-05-20'
        },
        additionalneeds: 'Breakfast'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.bookingid).toBeTruthy();
  expect(body.booking.firstname).toBe('Bruno');
});