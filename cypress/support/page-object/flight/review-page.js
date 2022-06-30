/// <reference types="cypress" />

import { CHANGE_PRICE_CONTINUE_BUTTON, IM_READY_TO_CHECKOUT_BUTTON } from '../common/selector/flight';
import utilities from '../common/utilities';

class ReviewPage {
  directedToReviewPage() {
    cy.url().should('include', 'checkout');
    cy.get(CHANGE_PRICE_CONTINUE_BUTTON).then(($button) => {
      if ($button.is(':visible')) {
        cy.get(CHANGE_PRICE_CONTINUE_BUTTON).contains('Continue').click();
      }
    });
  }

  clickIamReadyToCheckoutButton() {
    utilities.createSnapshot('FlightReviewPage');
    cy.get(IM_READY_TO_CHECKOUT_BUTTON).click();
  }
}

export default ReviewPage;
