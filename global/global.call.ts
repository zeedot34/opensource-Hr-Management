import { Page, expect } from "@playwright/test";

export async function loginToDashboard(page: any) {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Verify the page title
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('username').fill('Admin');
  await page.getByPlaceholder('password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/.*\/dashboard\/index/);
}
