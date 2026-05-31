import { garagePage } from '../pageObjects/GaragePage';
import { expensesPage } from '../pageObjects/ExpensesPage';

describe('Garage and Fuel Expenses Tests', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
    
    cy.contains('button', 'Guest log in').click();
    cy.url().should('include', '/panel/garage');
  });

  it('should successfully add a car and add fuel expenses', () => {
   
    garagePage.addCar('BMW', 'X5', '50000');

    
    garagePage.addExpenseButton.click();

    
    expensesPage.addFuelExpense('20', '100');

    
    cy.get('body').then(($body) => {
      if ($body.find('.modal-header .close').length > 0) {
        cy.get('.modal-header .close').click({ force: true });
      }
    });

    
    cy.get('a[href="/panel/expenses"]').first().click({ force: true });

   
    cy.url().should('include', '/panel/expenses');
    
    
    cy.get('.panel-page').should('be.visible');
  });
});
