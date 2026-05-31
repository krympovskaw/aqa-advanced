class ExpensesPage {
  
  get litersInput() { return cy.get('#addExpenseLiters'); }
  get totalCostInput() { return cy.get('#addExpenseTotalCost'); }
  get submitExpenseButton() { return cy.get('.modal-footer .btn-primary'); }
  get expenseTableFirstRow() { return cy.get('tbody tr').first(); }

  
  addFuelExpense(liters, cost) {
    this.litersInput.type(liters);
    this.totalCostInput.type(cost);
    this.submitExpenseButton.click();
  }
}

export const expensesPage = new ExpensesPage();
