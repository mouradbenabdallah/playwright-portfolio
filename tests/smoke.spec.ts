import { expect, test } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.setContent('<h1>Playwright smoke test</h1>');
  await expect(page.getByRole('heading', { name: 'Playwright smoke test' })).toBeVisible();
});
