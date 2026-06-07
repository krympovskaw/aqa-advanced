import { test, expect } from '@playwright/test';

const URL = 'https://qauto.forstudy.space';

test.describe('Регистрация - Пустые поля', () => {
  test('Негативный 1: Пустые обязательные поля', async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'guest', password: 'welcome2qauto' },
    });
    const page = await context.newPage();
    await page.goto(URL);
    await page.locator('button.header_signin').click();
    await page.locator('button:has-text("Registration")').click();

    
    const registerBtn = page.locator('button:has-text("Register")');
    await expect(registerBtn).toBeVisible();
    
   
    await expect(page.locator('h1')).not.toHaveText('Garage');
  });
});

test.describe('Регистрация нового пользователя - Основные тесты', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'guest', password: 'welcome2qauto' },
    });
    page = await context.newPage();
    await page.goto(URL);
    await page.locator('button.header_signin').click();
    await page.locator('button:has-text("Registration")').click();
  });

  test('Успешная регистрация с валидными данными', async () => {
    const uniqueEmail = `aqa-user${Date.now()}@test.com`;
    await page.locator('#signupName').fill('John');
    await page.locator('#signupLastName').fill('Doe');
    await page.locator('#signupEmail').fill(uniqueEmail);
    await page.locator('#signupPassword').fill('Password123');
    await page.locator('#signupRepeatPassword').fill('Password123');

    const registerBtn = page.locator('button:has-text("Register")');
    await expect(registerBtn).toBeEnabled();
    await registerBtn.click();
    await expect(page.locator('h1')).toHaveText('Garage');
  });

  test('Негативный 2: Слишком короткое имя (1 символ)', async () => {
    await page.locator('#signupName').fill('A');
    await page.locator('#signupLastName').focus();
    await expect(page.locator('text=Name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Негативный 3: Слишком длинная фамилия (21 символ)', async () => {
    await page.locator('#signupLastName').fill('A'.repeat(21));
    await page.locator('#signupEmail').focus();
    await expect(page.locator('text=Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Негативный 4: Невалидные symbols в имени (кириллица)', async () => {
    await page.locator('#signupName').fill('Иван');
    await page.locator('#signupLastName').focus();
    await expect(page.locator('text=Name is invalid')).toBeVisible();
  });

  test('Негативный 5: Некорректный формат Email', async () => {
    await page.locator('#signupEmail').fill('aqa-wrongemail.com');
    await page.locator('#signupPassword').focus();
    await expect(page.locator('text=Email is incorrect')).toBeVisible();
  });

  test('Негативный 6: Простой пароль (не соответствует требованиям)', async () => {
    await page.locator('#signupPassword').fill('12345');
    await page.locator('#signupRepeatPassword').focus();
    await expect(page.locator('text=Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
  });

  test('Негативный 7: Пароли не совпадают', async () => {
    await page.locator('#signupPassword').fill('Password123');
    await page.locator('#signupRepeatPassword').fill('Password321');
    await page.locator('#signupName').focus();
    await expect(page.locator('text=Passwords do not match')).toBeVisible();
  });
});
