import test, {
    APIRequest,
    APIRequestContext,
    APIResponse,
    expect,
    Page,
    request,
  } from "@playwright/test";

  export async function Login_us_prod(page: any) {
    await page.waitForTimeout(1000);
    await page.goto("/");
    // await page.waitForLoadState("networkidle");
    await expect(
      page
        .getByRole('img', { name: 'company-branding' })
        .locator('.orangehrm-login-logo')
        .getByText('LoginUsername : AdminPassword')
        .locator('#app div').filter({ hasText: 'LoginUsername : AdminPassword' }).nth(1)
    ).toBeVisible();
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/.*\/dashboard\/index/);
  }
  