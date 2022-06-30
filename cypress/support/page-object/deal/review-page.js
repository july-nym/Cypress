/// <reference types="cypress" />

import {
  DEAL_PRICE_SUMMARY,
  DEAL_FINE_PRINT_CHECKBOX,
  DEAL_READY_CHECKOUT_BUTTON,
  DEAL_PRICE_SUMMARY_2,
  ACCOMMODATION_DEAL_FINEPRINT_CHECKBOX,
} from '../deal/consts/selectors';

import { DEALS_AND_OFFERS } from '../common/path';
import Utilities from '../common/utilities';

const url = Cypress.env('baseUrl') || 'https://10travlr.freya.travlr.com';
class DEAL_REVIEW_PAGE {
  PRICE_SUMMARY() {
    cy.get('.price-summary').then(($body) => {
      if ($body.find(DEAL_PRICE_SUMMARY).length > 0) {
        cy.get(DEAL_PRICE_SUMMARY).should('contain', 'Price Summary');
      } else {
        cy.get(DEAL_PRICE_SUMMARY_2).should('contain', 'Price Summary');
      }
    });
  }
  FINE_PRINT_CHECKBOX() {
    cy.get(DEAL_FINE_PRINT_CHECKBOX).check({ force: true });
  }
  READY_CHECKOUT_BUTTON() {
    cy.wait(1000);
    Utilities.createSnapshot('Deal-Review-Page');
    cy.get(DEAL_READY_CHECKOUT_BUTTON).click();
  }
  DEAL_SITEMINDER_CHECKOUT_FORM() {
    cy.get('#firstName-283').clear().type('komang');
    cy.get('#lastName-283').clear().type('julian');
    cy.get('#phone-283').clear().type('081239547865');
    cy.get('#email-283').clear().type('email.receiver.travlr@gmail.com');
  }
  DEAL_ITEM_REMOVE_BUTTON() {
    cy.get('.summary-item__remove > .t-color-grey-dark').click();
  }
  DEAL_ITEM_SHOULD_NOT_EXIST() {
    cy.get('#summaryItem').should('not.exist');
  }
  DEAL_REMOVE_CONTENT_POP_UP() {
    cy.get('#trv-modal-content').should('exist');
  }
  DEAL_CONTENT_REMOVE_BUTTON() {
    cy.get('.t-display-table > :nth-child(2) > .t-btn').click();
  }
  DEAL_CART_CHECKOUT_PAGE() {
    cy.location().should((loc) => {
      expect(loc.href).to.include('/checkout');
    });
  }
  DEAL_YOUR_CART_EMPTY_TEXT() {
    cy.get('.t-m-t-30').should('contain', 'Your cart is empty');
  }
  DEAL_CONTINUE_SHOPPING_BUTTON() {
    cy.get('.c-deals-empty-cart > .t-btn').click();
  }
  DEAL_SEARCH_PAGE() {
    cy.location().should((loc) => {
      expect(loc.href).to.include('/search');
    });
  }
  IMAGE_HEADER_DEAL_REVIEW_PAGE() {
    cy.get('.t-navbar-top-left-logo-image').click();
  }
  GO_TO_DEAL_LANDING_PAGE() {
    cy.visit(`${url}${DEALS_AND_OFFERS}`);
  }
  DEAL_CART_LOGO() {
    cy.get('.cart').click();
  }
  ACCOMMODATION_DEAL_GUEST_INFORMATION_FORM() {
    cy.get('#firstName-9712').clear().type('Komang');
    cy.get('#lastName-9712').clear().type('Julian');
    cy.get('#phone-9712').clear().type('081808888101');
    cy.get('#email-9712').clear().type('email.receiver.travlr@gmail.com');
    cy.get('#specialRequest-9712').clear().type('none');
  }
  ACCOMMODATION_DEAL_FINE_PRINT_CHECKBOX() {
    cy.get(ACCOMMODATION_DEAL_FINEPRINT_CHECKBOX).check({ force: true });
  }
  DEAL_ACTIVITIES_GUEST_INFORMATION_FORM() {
    cy.get('#firstName-1175').clear().type('Komang');
    cy.get('#lastName-1175').clear().type('Julian');
    cy.get('#phone-1175').clear().type('081808888101');
    cy.get('#email-1175').clear().type('email.receiver.travlr@gmail.com');
    cy.get('#specialRequest-1175').clear().type('none');
  }
}
export default DEAL_REVIEW_PAGE;
