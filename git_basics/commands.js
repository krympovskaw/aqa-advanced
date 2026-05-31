
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
      message: '*'.repeat(text.length), // Показуємо зірочки замість пароля
    });
  }
  return originalFn(element, text, options);
});
