class GaragePage {
  
  get addCarButton() { return cy.contains('button', 'Add car'); }
  get brandSelect() { return cy.get('#addCarBrand'); }
  get modelSelect() { return cy.get('#addCarModel'); }
  get mileageInput() { return cy.get('#addCarMileage'); }
  get submitCarButton() { return cy.get('.modal-footer .btn-primary'); }
  get addExpenseButton() { return cy.contains('button', 'Add fuel expense').first(); }

  
  addCar(brand, model, mileage) {
    this.addCarButton.click();
    this.brandSelect.select(brand);
    this.modelSelect.select(model);
    this.mileageInput.type(mileage);
    this.submitCarButton.click();
  }
}

export const garagePage = new GaragePage();
