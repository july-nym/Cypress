/// <reference types="cypress" />

import Utilities from '../common/utilities';
import {
  FIRST_NAME_COLUMN,
  LAST_NAME_COLUMN,
  PHONE_NUMBER_COLUMN,
  EMAIL_COLUMN,
  DEAL_PAY_SECURELY_BUTTON,
  DEAL_PAID_STATUS_OK,
  MY_BOOKINGS_DEALS_BUTTON_CHECKOUT_PAGE,
  DEAL_PAY_SECURELY_BUTTON_2,
} from '../deal/consts/selectors';

const url = Cypress.env('baseUrl') || 'https://10travlr.freya.travlr.com';

class DEAL_CHECKOUT_PAGE {
  CHECKOUT_PAGE() {
    cy.location().should((loc) => {
      expect(loc.href).to.include('/payment');
    });
  }
  IMAGE_HEADER_DEAL_CHECKOUT_PAGE() {
    cy.wait(2000);
    Utilities.createSnapshot('Deal-Checkout-Page');
    cy.visit(url);
  }
  DEAL_CHECKOUT_DETAILS_FORM() {
    cy.get(FIRST_NAME_COLUMN).clear().type('Komang');
    cy.get(LAST_NAME_COLUMN).clear().type('Julian');
    cy.get(PHONE_NUMBER_COLUMN).clear().type('089727272731');
    cy.get('#postcode').first().clear().type('80225');
    cy.get('.t-label-text-small > .t-heading-5').then(($btn) => {
      if ($btn.text().includes('Fraud Detection')) {
        cy.get(EMAIL_COLUMN).first().clear().type('decline@forter.com');
      } else {
        cy.get(EMAIL_COLUMN).first().clear().type('email.receiver.travlr@gmail.com');
      }
    });
  }
  DEAL_NON_LOGIN_CHECKOUT_FORM() {
    cy.get(FIRST_NAME_COLUMN).clear().type('Komang');
    cy.get(LAST_NAME_COLUMN).clear().type('Julian');
    cy.get(PHONE_NUMBER_COLUMN).clear().type('089727272731');
    cy.get('#postcode').first().clear().type('80225');
    cy.get(EMAIL_COLUMN).first().clear().type('approve@forter.com');
  }
  DEAL_CHECKOUT_CHECKBOX() {
    cy.get('[type="checkbox"]').check({ force: true });
    Utilities.createSnapshot('Deal-Checkout-Page');
  }
  DEAL_PAY_SECURELY_BUTTON() {
    cy.get('body').then(($body) => {
      if ($body.find(DEAL_PAY_SECURELY_BUTTON).length > 0) {
        cy.get(DEAL_PAY_SECURELY_BUTTON).click();
      } else {
        cy.get(DEAL_PAY_SECURELY_BUTTON_2).click();
      }
    });
  }
  DEAL_PAID_STATUS_OK() {
    cy.location().should((loc) => {
      expect(loc.href).to.include('/confirm');
    });
    cy.get(DEAL_PAID_STATUS_OK).should('contain', 'paid');
    Utilities.createSnapshot('Deal-Paid-Status-Page');
  }
  DEAL_CARD_DECLINED_ALERT() {
    cy.get('#trv-modal-content > div.trv-modal__body > div > p').should('contain', 'Your card was declined');
    Utilities.createSnapshot('Deal-Card-Declined', { captureFullPage: false, enableStickyTrvHeader: true });
  }
  DEAL_FRAUD_PAGE() {
    cy.get('.t-heading-3 > :nth-child(2)').should('contain', 'Transaction under manual processing');
    Utilities.createSnapshot('Deal-Fraud-Page');
  }
  CLICK_MY_BOOKING_DEAL_CHECKOUT_PAGE_BUTTON() {
    cy.get(MY_BOOKINGS_DEALS_BUTTON_CHECKOUT_PAGE).click();
  }
}

export default DEAL_CHECKOUT_PAGE;
