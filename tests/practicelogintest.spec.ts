import test, { expect, Page } from "@playwright/test";
import { loginToDashboard } from "../global/global.call";

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(2000);
  await expect(page).toHaveTitle(/OrangeHRM/);
//   await page.close();
});

test('demo login test1', async ({ page }) => {
   
    await loginToDashboard(page);
    await page.waitForTimeout(5000);
    
    // await page.close(); 
  });


  
test('demo login and add a user', async({page}) => {
    // yahan se
    await loginToDashboard(page);
    // yahan tak ka function bnay ga

    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    // await expect(page).toHaveURL(/.*\/dashboard\/index/);

    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Admin' }).click();
    
    await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);

    await expect(page.getByText('System Users')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: ' Add' }).click();
    
    await expect(page).toHaveURL(/.*\/admin\/saveSystemUser/);
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.locator('form i').nth(1).click();
    await page.getByRole('option', { name: 'Enabled' }).click();

    const employeeNameField = page.getByPlaceholder('Type for hints...');
    await employeeNameField.fill('a');


const dropdownOptions = page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option');

// Use `waitFor` to ensure all dropdown options are fully loaded
await page.waitForTimeout(3000); // Wait for a short time to allow options to populate
await dropdownOptions.first().waitFor({ state: 'visible' });

// Get all options for debugging purposes (optional)
const optionsText = await dropdownOptions.allTextContents();
console.log('Available options:', optionsText);

await dropdownOptions.first().click();

   

    await page.getByRole('textbox').nth(2).fill('Admin5');
    await page.getByRole('textbox').nth(3).fill('admin123');
    await page.getByRole('textbox').nth(4).fill('admin123');
    await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);
    // await page.waitForTimeout(3000);
    await page.close();
});


test('demo search and delete', async({page}) => {

    await loginToDashboard(page);

    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    // await expect(page).toHaveURL(/.*\/dashboard\/index/);

    await page.waitForTimeout(3000)

    await page.getByRole('link', { name: 'Admin' }).click();
    
    await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);

    await expect(page.getByText('System Users')).toBeVisible();
    await page.waitForTimeout(2000); 
    await page.getByRole('textbox').nth(1).fill('Admin5');
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.locator('form i').nth(1).click();
    await page.getByRole('option', { name: 'Enabled' }).click();

    const employeeNameField = page.getByPlaceholder('Type for hints...');
    await employeeNameField.fill('a');

    const dropdownOptions = page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option');


    await page.waitForTimeout(3000); 
    await dropdownOptions.first().waitFor({ state: 'visible' });


    const optionsText = await dropdownOptions.allTextContents();
    console.log('Available options:', optionsText);

    await dropdownOptions.first().click();

    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Search' }).click();
// await page.waitForTimeout(1000)
    await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);
    await page.waitForTimeout(1000)

    await page.getByRole('row', { name: ' Admin5 Admin' }).getByRole('button').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: ' Yes, Delete' }).click();
    // await page.waitForTimeout(6000);
    await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);
    await page.close();

});

// test('demo', async({page}) => {

//     await loginToDashboard(page);

//     await page.getByRole('link', { name: 'Time' }).click()
//     await expect(page).toHaveURL(/.*\/time\/viewEmployeeTimesheet/);


//     await page.close();

// });




test('demo logout test1', async({page}) => {

    await loginToDashboard(page);
    await page.waitForTimeout(2000);
    await page.locator('span').locator('i').click();
    await page.waitForTimeout(2000);
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.close();
});



test('demo negative login test3', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('username').fill('wrongAdmin');
    await page.getByPlaceholder('password').fill('60admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.close();

});


















 function async(arg0: { page: any; }): (args: import("playwright/test").PlaywrightTestArgs & import("playwright/test").PlaywrightTestOptions & import("playwright/test").PlaywrightWorkerArgs & import("playwright/test").PlaywrightWorkerOptions, testInfo: import("playwright/test").TestInfo) => Promise<void> | void {
     throw new Error("Function not implemented.");
 }
 function getByPlaceholder(arg0: string) {
    throw new Error("Function not implemented.");
 }
function Login(page: Page) {
    throw new Error("Function not implemented.");
}

