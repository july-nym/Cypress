/// <reference types="cypress" />

class ProductPage {
  selectActivities() {
    cy.get('div > a > div.t-card-content-body > div > h3').first().invoke('removeAttr', 'target').click();
  }
}
export default ProductPage;
