/// <reference types="cypress" />

import { ACCOMMODATION_DEAL_PRODUCT, SELECT_DESIRED_DEAL } from '../deal/consts/selectors';
import Utilities from '../common/utilities';

class DEAL_PRODUCT_PAGE {
  SEARCH_RESULT_PAGE() {
    cy.location().should((loc) => {
      expect(loc.href).to.include('/search');
    });
    Utilities.createSnapshot('Deal-Product-Page');
  }
  SELECT_DESIRED_DEAL() {
    cy.get(SELECT_DESIRED_DEAL).click();
  }
  SELECT_ACCOMMODATION_DEAL_PRODUCT() {
    cy.get(ACCOMMODATION_DEAL_PRODUCT).click();
  }
  SELECT_DEAL_ACTIVITIES_PRODUCT() {
    cy.get('.card-deal__body > .t-heading-5').click();
  }
}
export default DEAL_PRODUCT_PAGE;
