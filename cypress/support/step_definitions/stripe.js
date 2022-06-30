/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import {
  MOCK_CC_CVC,
  MOCK_CC_EXP,
  MOCK_CC_NUMBER,
  MOCK_CC_ZIP,
  INVALID_MOCK_CC_NUMBER,
} from '../page-object/common/mock_cc';
import {
  accommodationCreditCardRadioButton,
  activitiesCreditCardRadioButton,
  flightCreditCardRadioButton,
} from '../page-object/common/selector/stripe';

And('The user choose to pay the product using valid visa card', () => {
  // This select the credit card radio button on flight
  cy.get('body').then(($body) => {
    if ($body.find(flightCreditCardRadioButton).length > 0) {
      cy.get(flightCreditCardRadioButton).click();
    }
  });
  // This select the credit card radio button on accommodation
  cy.get('body').then(($body) => {
    if ($body.find(accommodationCreditCardRadioButton).length > 0) {
      cy.get(accommodationCreditCardRadioButton).click();
    }
  });
  // This select the credit card radio button on activities
  cy.get('body').then(($body) => {
    if ($body.find(activitiesCreditCardRadioButton).length > 0) {
      cy.get(activitiesCreditCardRadioButton).click();
    }
  });

  // This input the creditcard data
  cy.get('.__PrivateStripeElement > iframe').then(($element) => {
    const $body = $element.contents().find('body');

    let stripe = cy.wrap($body);
    stripe.find('[name="cardnumber"]').click().type(MOCK_CC_NUMBER);

    stripe = cy.wrap($body);
    stripe.find('[name="exp-date"]').click().type(MOCK_CC_EXP);

    stripe = cy.wrap($body);
    stripe.find('[name="cvc"]').click().type(MOCK_CC_CVC);

    stripe = cy.wrap($body);
    stripe.find('[name="postal"]').click().type(MOCK_CC_ZIP);
  });
});

And('The user choose to pay the product using invalid visa card', () => {
  // This select the credit card radio button on flight
  cy.get('body').then(($body) => {
    if ($body.find(flightCreditCardRadioButton).length > 0) {
      cy.get(flightCreditCardRadioButton).click();
    }
  });
  // This select the credit card radio button on accommodation
  cy.get('body').then(($body) => {
    if ($body.find(accommodationCreditCardRadioButton).length > 0) {
      cy.get(accommodationCreditCardRadioButton).click();
    }
  });

  // This input the creditcard data
  cy.get('.__PrivateStripeElement > iframe').then(($element) => {
    const $body = $element.contents().find('body');

    let stripe = cy.wrap($body);
    stripe.find('[name="cardnumber"]').click().type(INVALID_MOCK_CC_NUMBER);

    stripe = cy.wrap($body);
    stripe.find('[name="exp-date"]').click().type(MOCK_CC_EXP);

    stripe = cy.wrap($body);
    stripe.find('[name="cvc"]').click().type(MOCK_CC_CVC);

    stripe = cy.wrap($body);
    stripe.find('[name="postal"]').click().type(MOCK_CC_ZIP);
  });
});
