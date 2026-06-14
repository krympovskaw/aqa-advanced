const { test: base, expect } = require('@playwright/test');

// === 1. ОБЪЯВЛЯЕМ КЛАСС СТРАНИЦЫ (PAGE OBJECT) ===
class GaragePage {
  constructor(page) {
    this.page = page;
    this.garageHeader = page.locator('h1', { hasText: 'Garage' });
    this.addCarButton = page.locator('button', { hasText: 'Add car' });
    
    // ИСПРАВЛЕНИЕ: Берем только ту ссылку Profile, которая видима на экране
    this.profileButton = page.locator('a', { hasText: 'Profile' }).filter({ visible: true });
  }

  async navigate() {
    await this.page.goto('https://qauto.forstudy.space');
  }
}

// === 2. СОЗДАЕМ КАСТОМНУЮ ФИКСТУРУ С АВТО-РЕГИСТРАЦИЕЙ ===
const test = base.extend({
  userGaragePage: async ({ browser }, use) => {
    
    // Создаем чистый контекст с HTTP-авторизацией для доступа к сайту
    const context = await browser.newContext({
      httpCredentials: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });

    const page = await context.newPage();

   
    await page.goto('https://qauto.forstudy.space', { waitUntil: 'load' });

    
    const uniqueId = Date.now();
    const randomEmail = `tester_${uniqueId}@gmail.com`;
    const securePassword = 'Password123!';

    
    const signUpButton = page.locator('button:has-text("Sign up"), .hero-descriptor_btn').first();
    await signUpButton.click();

    
    await page.locator('#signupName').fill('QA');
    await page.locator('#signupLastName').fill('Engineer');
    await page.locator('#signupEmail').fill(randomEmail);
    await page.locator('#signupPassword').fill(securePassword);
    await page.locator('#signupRepeatPassword').fill(securePassword);

 
    await page.locator('div.modal-footer button', { hasText: 'Register' }).click();

   
    await page.waitForURL('**/panel/garage', { timeout: 15000 });

    
    const garagePage = new GaragePage(page);
    await use(garagePage);

    
    await context.close();
  },
});


test.describe('QAuto Garage Tests with UI Registration', () => {

  test('should open Garage page automatically logged in', async ({ userGaragePage }) => {
    
    await expect(userGaragePage.garageHeader).toBeVisible();
    await expect(userGaragePage.addCarButton).toBeVisible();
    await expect(userGaragePage.profileButton).toBeVisible();
  });

});
