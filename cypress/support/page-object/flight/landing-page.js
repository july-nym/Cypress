/// <reference types="cypress" />

import {
  ADULT_COLUMN,
  CABIN_CLASS_LIST,
  CALENDAR_DATE_LIST,
  CALENDAR_NEXT_MONTH_ARROW,
  CHILD_COLUMN,
  DATE_COLUMN,
  DEPART_AND_RETURN_DATE_LIST,
  DEPART_DATE_COLUMN,
  FROM_COLUMN,
  FROM_COLUMN_LIST,
  INFANT_COLUMN,
  ONE_WAY_RADIO_BUTTON,
  PASSENGER_AND_CABIN_CLASS_COLUMN,
  RETURN_RADIO_BUTTON,
  SEARCH_BUTTON,
  TITLE_HEADING,
  TO_COLUMN,
  TO_COLUMN_LIST,
} from '../common/selector/flight';

import utilities from '../common/utilities';
const dayjs = require('dayjs');

class LandingPage {
  clickOnewayRadioButton() {
    cy.get(ONE_WAY_RADIO_BUTTON).click();
  }

  clickReturnRadioButton() {
    cy.get(RETURN_RADIO_BUTTON).click();
  }

  selectDestinationFrom(value) {
    cy.get(FROM_COLUMN).type(value);
    if (value === 'Singapore') {
      cy.get(FROM_COLUMN_LIST).eq(1).click();
    } else {
      cy.get(FROM_COLUMN_LIST).first().click();
    }
  }

  selectDestinationTo(value) {
    cy.get(TO_COLUMN).type(value);
    cy.get(TO_COLUMN_LIST).first().click();
  }

  selectOnewayDate() {
    cy.get(DATE_COLUMN).clear().type(dayjs().format('DD MMM YYYY'));
    cy.get(DATE_COLUMN).click();
    cy.get(CALENDAR_NEXT_MONTH_ARROW).click();
    cy.get(CALENDAR_NEXT_MONTH_ARROW).click();
    cy.get(CALENDAR_DATE_LIST).find('span').contains('25').click();
  }

  inputPassenger(adult, child, infant) {
    cy.get(PASSENGER_AND_CABIN_CLASS_COLUMN).click();
    cy.get(ADULT_COLUMN).clear().type(`${adult}{enter}`);
    cy.get(CHILD_COLUMN).clear().type(`${child}{enter}`);
    cy.get(INFANT_COLUMN).clear().type(`${infant}{enter}`);
  }

  selectCabinClass(value) {
    cy.get(CABIN_CLASS_LIST).select(value);
  }

  clickSearchButton() {
    cy.get(TITLE_HEADING).click();
    cy.get(SEARCH_BUTTON).click();
  }

  selectDepartAndReturnDate() {
    let depretDate = dayjs().format('DD MMM YYYY');
    cy.get(DEPART_DATE_COLUMN).clear().type(`{selectall}${depretDate}`);
    cy.get(DEPART_AND_RETURN_DATE_LIST).find('span').contains('25').click();
    cy.get(DEPART_AND_RETURN_DATE_LIST).find('span').contains('27').click();
  }
}
export default LandingPage;
