/// <reference types="cypress" />

import { SEARCH_COLUMN } from '../common/selector/activities';

class LandingPage {
  searchActivities() {
    cy.get(SEARCH_COLUMN).type('Snorkling');
    cy.wait(2000);
  }

  clickSearchActivitiesButton() {
    cy.get('#buttonHeroSearchActivity').click();
  }
}
export default LandingPage;
