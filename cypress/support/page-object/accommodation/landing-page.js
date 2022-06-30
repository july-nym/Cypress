/// <reference types="cypress" />

import {
  ADULT_COLUMN,
  CHECK_IN_DATE_LIST,
  CHECK_OUT_DATE_LIST,
  CHILDREN_COLUMN,
  DESTINATION_COLUMN,
  DESTINATION_LIST,
  GUEST_AND_ROOM_COLUMN,
  HEADING_TITLE,
  SEARCH_HOTEL_BUTTON,
} from '../common/selector/accommodation';

class LandingPage {
  selectDestination() {
    cy.get(DESTINATION_COLUMN).click().type('Melbourne');
    cy.wait(2000);
    cy.get(DESTINATION_LIST).first().click();
  }

  selectCheckInDate() {
    cy.get('#accommodationCheckinDate').click();
    cy.get(CHECK_IN_DATE_LIST).last().click();
  }

  selectCheckOutDate() {
    cy.get('#accommodationCheckoutDate').click();
    cy.get(CHECK_OUT_DATE_LIST).eq(5).click();
  }

  selectGuestAndRoom(adult, children) {
    cy.get(GUEST_AND_ROOM_COLUMN).click();
    cy.get(ADULT_COLUMN).clear().type(adult);
    cy.get(CHILDREN_COLUMN).clear().type(children);
    cy.get(HEADING_TITLE).click();
  }

  clickSearchHotelButton() {
    cy.get(SEARCH_HOTEL_BUTTON).click();
  }
}
export default LandingPage;
