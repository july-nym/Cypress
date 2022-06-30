/// <reference types="cypress" />

import { DEALS_AND_OFFERS } from '../common/path';
import Utilities from '../common/utilities';

import { DEAL_SEARCH_COLUMN, DEAL_SEARCH_BUTTON, DEAL_SITEMINDER_PRODUCT } from '../deal/consts/selectors';

const url = Cypress.env('baseUrl') || 'https://10travlr.freya.travlr.com';

class DEAL_LANDING_PAGE {
  VISIT() {
    cy.visit(`${url}${DEALS_AND_OFFERS}`);
    Utilities.cookiesButton();
    Utilities.tryCloseMultiPurposeBanner();
    Utilities.serverStatus();
    Utilities.uncaughtException();
    Utilities.createSnapshot('Deal-Landing-Page');
  }
  SEARCH_COLUMN() {
    cy.get(DEAL_SEARCH_COLUMN).type('automation');
  }
  SEARCH_BUTTON() {
    cy.get(DEAL_SEARCH_BUTTON).click();
  }
  DEAL_SITEMINDER_PRODUCT() {
    cy.get(DEAL_SITEMINDER_PRODUCT).click();
  }
  SEARCH_DEAL_ACCOMMODATION_PRODUCT() {
    cy.get(DEAL_SEARCH_COLUMN).type('Muri Beach Club Hotel');
  }
  SEARCH_DEAL_ACTIVITIES_PRODUCT() {
    cy.get(DEAL_SEARCH_COLUMN).type('9 day crays');
  }
}
export default DEAL_LANDING_PAGE;
