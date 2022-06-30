/// <reference types="cypress" />

import { When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import {
  accommodationHummRadioButton,
  flightHummRadioButton,
  flightPayWithHummButton,
  hummPaymentStatus,
} from '../page-object/common/selector/humm';
import utilities from '../page-object/common/utilities';

// MAIN HUMM PAGE ====>

And('The user choose to pay the product using valid humm', () => {
  cy.get('body').then(($body) => {
    if ($body.find(flightHummRadioButton).length > 0) {
      cy.get(flightHummRadioButton).click();
    }
  });
  cy.get('body').then(($body) => {
    if ($body.find(accommodationHummRadioButton).length > 0) {
      cy.get(accommodationHummRadioButton).click();
    }
  });
});

Then('The user should be directed to the humm login page', () => {
  cy.url().should('include', 'login');
  utilities.uncaughtException();
});

And('The user input the valid data on humm login form', () => {
  cy.get('#identity').type('test.travelr2@shophumm.test');
  cy.get('#current-password').type('MHi8IHoyYBT3Kxoym7an');
  utilities.createSnapshot('Humm-Login-Page', { captureFullPage: false, enableStickyTrvHeader: true });
});

When('The user click the humm "sign in" button', () => {
  cy.get('form.au-target > .btn').click();
});

Then('The user should be directed to the "integration-cart" humm page', () => {
  cy.url().should('include', 'Confirm');
  utilities.createSnapshot('Humm-Cart-Page', { captureFullPage: false, enableStickyTrvHeader: true });
});

And('The user select the "fornightly payment"', () => {
  cy.get('#terms').check({ force: true });
  cy.get('.mt-n5 > a:nth-child(1)').click();
  cy.get('.position-relative > button:nth-child(1)').click();
});

When('The user click the humm "purchase" button', () => {
  cy.get('button.au-target').click();
});

Then('The user should received text "Purchase complete!"', () => {
  cy.get(hummPaymentStatus).should('contain', 'Purchase complete');
  utilities.createSnapshot('Humm-Success-Page', { captureFullPage: false, enableStickyTrvHeader: true });
  cy.wait(7000);
  cy.reload();
});

// MAIN HUMM DECLINE PAGE ====>

And('The user input the invalid data for decline purpose on humm login form', () => {
  cy.get('#identity').type('test.alwaysdecline@shophumm.test');
  cy.get('#current-password').type('Password1');
});

Then('The user is on the humm decline page', () => {
  cy.url().should('include', 'Checkout');
  cy.get('.animated > :nth-child(3)').should('contain', 'We are unable to process your purchase.');
  utilities.createSnapshot('Humm-Decline-Alert', { captureFullPage: false, enableStickyTrvHeader: true });
});

When('The user click the "Back to merchant site" button', () => {
  cy.get('.btn').click();
  cy.wait(3000);
  cy.reload();
});

// FLIGHT HUMM COMPONENT ====>

Then('The user should be directed to flight payment success status page', () => {
  cy.url().should('include', 'success');
  cy.get('.t-ul-with-list > :nth-child(2) > .t-text-callout').should('contain', 'PAID').and('be.visible');
  utilities.createSnapshot('Humm-Redirect-Booking-Success', { captureFullPage: false, enableStickyTrvHeader: true });
});

When('The user click the flight "pay with humm" button', () => {
  utilities.createSnapshot('Pay-With-Humm-Checkout-Page');
  cy.get(flightPayWithHummButton).click();
});

Then('The user should be directed to flight payment decline status page', () => {
  cy.url().should('include', 'declined');
  cy.get('.t-heading-3 > :nth-child(2)').should('contain', 'Payment Declined');
  utilities.createSnapshot('Humm-Redirect-Booking-Declined', { captureFullPage: false, enableStickyTrvHeader: true });
});

// ACCOMMODATION HUMM COMPONENT ====>

When('The user click the accommodation "pay with humm" button', () => {
  cy.get('#btn-humm').click();
});
