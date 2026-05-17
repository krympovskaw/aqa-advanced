Cypress.Commands.add('login', (email, password) => {
  cy.contains('button', 'Sign In').click();
  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password, { sensitive: true });
  cy.get('.modal-footer').contains('button', 'Login').click();
});


Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false; 
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length), 
    });
  }
  return originalFn(element, text, options);
});


describe('Тестування форми реєстрації Hillel Auto', () => {

  beforeEach(() => {
    
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
    
    cy.contains('button', 'Sign In').click();
    cy.contains('button', 'Registration').click();
  });

  describe('Валідація полів форми (Пункт 3 - Негативні тести)', () => {
    it('Повинні відображатися помилки для порожніх обов\'язкових полів', () => {
      
      cy.get('#signupName').type('1').clear().blur();
      cy.get('#signupLastName').type('1').clear().blur();
      cy.get('#signupEmail').type('1').clear().blur();
      cy.get('#signupPassword').type('1').clear().blur();
      cy.get('#signupRepeatPassword').type('1').clear().blur();

      
      cy.contains('Name required').should('be.visible');
      cy.contains('Last name required').should('be.visible');
      cy.contains('Email required').should('be.visible');
      cy.contains('Password required').should('be.visible');
      cy.contains('Re-enter password required').should('be.visible');
      
      
      cy.contains('button', 'Register').should('be.disabled');
    });

    it('Повинні відображатися помилки для некоректних даних', () => {
      
      cy.get('#signupName').type('A').blur(); 
      cy.get('#signupLastName').type('B').blur(); 
      cy.get('#signupEmail').type('invalid-email').blur(); 
      cy.get('#signupPassword').type('123', { sensitive: true }).blur(); 

      
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
      cy.contains('Email is incorrect').should('be.visible');
      cy.contains('Password has to be from 8 to 15 characters long').should('be.visible');
      
      
      cy.get('#signupPassword').clear().type('SecurePass1', { sensitive: true }).blur(); 
      cy.get('#signupRepeatPassword').clear().type('WrongPass2', { sensitive: true }).blur(); 

      
      cy.contains('match', { matchCase: false }).should('be.visible');
    });
  });

  describe('Успішна реєстрація та логін (Пункти 3 та 4)', () => {
    it('Має успішно зареєструвати користувача та залогінити через кастомну команду', () => {
      
      const uniqueEmail = `user_${Date.now()}@test.com`;
      const pass = 'SecurePass1';

      cy.get('#signupName').type('John');
      cy.get('#signupLastName').type('Doe');
      cy.get('#signupEmail').type(uniqueEmail);
      cy.get('#signupPassword').type(pass, { sensitive: true });
      cy.get('#signupRepeatPassword').type(pass, { sensitive: true });

      
      cy.contains('button', 'Register').should('not.be.disabled').click();
      
      
      cy.url().should('include', '/panel/garage');

      
      cy.contains('Log out').click();

      cy.login(uniqueEmail, pass);
      
      
      cy.url().should('include', '/panel/garage');
    });
  });

});
