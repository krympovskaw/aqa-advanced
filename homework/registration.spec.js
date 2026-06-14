import { test, expect } from '@playwright/test';


class RegistrationModal {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.modalTitle = page.locator('.modal-title');
    this.nameInput = page.locator('#signupName');
    this.lastNameInput = page.locator('#signupLastName');
    this.emailInput = page.locator('#signupEmail');
    this.passwordInput = page.locator('#signupPassword');
    this.repeatPasswordInput = page.locator('#signupRepeatPassword');
    this.registerButton = page.locator('button:has-text("Register")');
    this.garageHeader = page.locator('h1');
  }

  async fillForm(name, lastName, email, password, repeatPassword) {
    if (name !== undefined) await this.nameInput.fill(name);
    if (lastName !== undefined) await this.lastNameInput.fill(lastName);
    if (email !== undefined) await this.emailInput.fill(email);
    if (password !== undefined) await this.passwordInput.fill(password);
    if (repeatPassword !== undefined) await this.repeatPasswordInput.fill(repeatPassword);
  }

  async clickRegister() {
    await this.registerButton.click();
  }
}

test.describe('Регистрация нового пользователя - POM & ENV', () => {
  let registrationModal;

 
  test.beforeEach(async ({ page }) => {
    registrationModal = new RegistrationModal(page);

    
    await page.goto('/', { waitUntil: 'load' });
    
    await page.locator('button.header_signin').click();
    await page.locator('button:has-text("Registration")').click();
  });

  test('Успешная регистрация с валидными данными', async () => {
    const uniqueEmail = `aqa-user${Date.now()}@test.com`;

    await registrationModal.fillForm('John', 'Doe', uniqueEmail, 'Password123', 'Password123');
    await expect(registrationModal.registerButton).toBeEnabled();
    await registrationModal.clickRegister();
    await expect(registrationModal.garageHeader).toHaveText('Garage');
  });

  test('Негативный 1: Пустые обязательные поля', async () => {
    await expect(registrationModal.registerButton).toBeVisible();
    await expect(registrationModal.garageHeader).not.toHaveText('Garage');
  });

  test('Негативный 2: Слишком короткое имя (1 символ)', async () => {
    await registrationModal.nameInput.fill('A');
    await registrationModal.lastNameInput.focus();
    await expect(registrationModal.page.locator('text=Name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Негативный 3: Слишком длинная фамилия (21 символ)', async () => {
    await registrationModal.lastNameInput.fill('A'.repeat(21));
    await registrationModal.emailInput.focus();
    await expect(registrationModal.page.locator('text=Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Негативный 4: Невалидные symbols в имени (кириллица)', async () => {
    await registrationModal.nameInput.fill('Иван');
    await registrationModal.lastNameInput.focus();
    await expect(registrationModal.page.locator('text=Name is invalid')).toBeVisible();
  });

  test('Негативный 5: Некорректный формат Email', async () => {
    await registrationModal.emailInput.fill('aqa-wrongemail.com');
    await registrationModal.passwordInput.focus();
    await expect(registrationModal.page.locator('text=Email is incorrect')).toBeVisible();
  });

  test('Негативный 6: Простой пароль (не соответствует требованиям)', async () => {
    await registrationModal.passwordInput.fill('12345');
    await registrationModal.repeatPasswordInput.focus();
    await expect(registrationModal.page.locator('text=Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
  });

  test('Негативный 7: Пароли не совпадают', async () => {
    await registrationModal.passwordInput.fill('Password123');
    await registrationModal.repeatPasswordInput.fill('Password321');
    await registrationModal.nameInput.focus();
    await expect(registrationModal.page.locator('text=Passwords do not match')).toBeVisible();
  });
});

  