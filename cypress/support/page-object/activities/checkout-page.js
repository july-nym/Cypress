/// <reference types="cypress" />

import { PAY_SECURELY_BUTTON } from '../common/selector/activities';

class CheckoutPage {
  inputCustomerData() {
    cy.get('#firstName0').clear().type('Komang');
    cy.get('#lastName0').clear().type('Julian');
    cy.get('.vti__input').clear().type('081237856734');
    cy.get('#postcode').clear().type('80225');
    cy.get('#email').clear().type('email.receiver.travlr@gmail.com');
    cy.get('#firstName1').clear().type('kadek');
    cy.get('#lastName1').clear().type('julian');
    cy.get('#specialRequirements').clear().type('I want to have fun without any problem please!');
    cy.get('#question0').clear().type('12312311');
    cy.get('#question1').clear().type('Australia');
    cy.get('#question2').clear().type('30 December 2025');
  }

  agreedTOS() {
    cy.get('.t-col-9 > .t-input-group > .t-input-select > select').select('CMS-X Team Update');
    cy.get('#isAgreedWithTermConditionTransaction').check({ force: true });
  }

  paySecurelyButton() {
    cy.get(PAY_SECURELY_BUTTON).click();
  }

  declineAlert() {
    cy.get('.t-alert-alt-text').should('contain', 'Your card was declined.');
  }
}
export default CheckoutPage;
