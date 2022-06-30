/// <reference types="cypress" />
class CheckoutPage {
  customerData() {
    cy.get('select#title_caption').select('Mr.');
    cy.get('#first_name').clear().type('Komang Julian');
    cy.get('#last_name').clear().type('Rothschild');
    cy.get('#phonenumber').clear().type('081277889922');
    cy.get('#email').clear().type('email.receiver.travlr@gmail.com');
    cy.get('#postcode').clear().type('80225');
  }

  continueToPaymentButton() {
    cy.get('a.t-button-primary').click();
  }

  selectDonation() {
    cy.get('.organization-selector > select').select('New CMS-X Team');
  }

  agreedTOS() {
    cy.get('#termConditionCheckbox').check({ force: true });
  }

  paySecurelyButton() {
    cy.get('.stripe').click();
  }

  declineAlert() {
    cy.get('#booking > div.container > div > div.Payment-failed > div > p > span').should(
      'contain',
      'Error confirming stripe - Your card was declined.'
    );
  }

  hummDeclineAlert() {
    cy.get('#booking > div.container > div > div.Payment-failed > div > p > strong').should(
      'contain',
      'Your payment could not be processed.'
    );
  }
}
export default CheckoutPage;
