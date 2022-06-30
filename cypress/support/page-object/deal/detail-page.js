/// <reference types="cypress" />

import {
  CHOOSE_YOUR_OPTION_BUTTON,
  BUY_NOW_BUTTON,
  DATE_AVAILABILITY_CALENDAR,
  DEAL_BUY_NOW_BUTTON_2,
  ACCOMMODATION_DEAL_BOOK_NOW_BUTTON,
  ACCOMMODATION_DEAL_CALENDAR_NEXT_ARROW,
  ACCOMMODATION_DEAL_CALENDAR_SELECT_FIRST_NUMBER,
  ACCOMMODATION_DEAL_CONTINUE_BUTTON,
  ACCOMMODATION_DEAL_CALENDAR,
} from '../deal/consts/selectors';

import Utilities from '../common/utilities';

class DEAL_DETAIL_PAGE {
  DETAIL_PAGE() {
    cy.location().should((loc) => {
      expect(loc.href).to.include('/details');
    });
    Utilities.createSnapshot('Deal-Detail-Page');
  }
  CHOOSE_YOUR_OPTION_BUTTON() {
    cy.get(CHOOSE_YOUR_OPTION_BUTTON).should('contain', 'Choose your option').click();
  }
  BUY_NOW_BUTTON() {
    cy.get('body').then(($body) => {
      if ($body.find(BUY_NOW_BUTTON).length > 0) {
        cy.get(BUY_NOW_BUTTON).first().click();
      } else {
        cy.get(DEAL_BUY_NOW_BUTTON_2).first().click();
      }
    });
  }
  DEAL_SITEMINDER_BUY_NOW_BUTTON() {
    cy.get('body').then(($body) => {
      if ($body.find(BUY_NOW_BUTTON).length > 0) {
        cy.get(BUY_NOW_BUTTON).first().click();
      } else {
        cy.get(DEAL_BUY_NOW_BUTTON_2).first().click();
      }
    });
  }
  DATE_AVAILABILITY_CALENDAR() {
    cy.get(DATE_AVAILABILITY_CALENDAR).click({ multiple: true });
  }
  AVAILABILITY_CALENDAR_CONTINUE_BUTTON() {
    cy.get(AVAILABILITY_CALENDAR_CONTINUE_BUTTON).should('contain', 'BOOK NOW').click();
  }
  CLICK_ACCOMMODATION_DEAL_BOOK_NOW_BUTTON() {
    cy.get('body').then(($body) => {
      if ($body.find(ACCOMMODATION_DEAL_BOOK_NOW_BUTTON).length > 0) {
        cy.get(ACCOMMODATION_DEAL_BOOK_NOW_BUTTON).eq(2).click();
      } else {
        cy.get(':nth-child(1) > .deal-sku__inner > .deal-sku__entry > .deal-sku__right > div > .t-btn').first().click();
      }
    });
  }
  ACCOMMODATION_DEAL_CALENDAR() {
    cy.get(ACCOMMODATION_DEAL_CALENDAR).should('be.visible');
    cy.wait(2000);
  }
  SELECT_ACCOMMODATION_DEAL_BOOK_DATE() {
    cy.get(
      '#fcOne > div.fc-view-harness.fc-view-harness-passive > div > table > tbody > tr > td > div > div > div > table > tbody > tr > td.fc-daygrid-day.fc-day.fc-daygrid-day-available.fc-daygrid-day-canstay > div'
    )
      .last()
      .click();
  }
  ACCOMMODATION_DEAL_CONTINUE_BUTTON() {
    cy.wait(1000);
    Utilities.createSnapshot('Accommodation-Deal-Calendar', { captureFullPage: false, enableStickyTrvHeader: true });
    cy.get(ACCOMMODATION_DEAL_CONTINUE_BUTTON).click();
  }
  CLICK_ACCOMMODATION_DEAL_BOOK_LATER_BUTTON() {
    cy.get(
      '#skuLists > div > div > div.deal-sku__inner > div > div.deal-sku__right.t-visible-md.t-text-align-center > div.deal-sku__booklater-help.t-display-flex.t-m-t-8.print-hidden > button'
    )
      .eq(2)
      .click();
  }
  DEAL_ACTIVITIES_CALENDAR() {
    cy.get(
      '#app > main > div > div > div.calendar-book.t-migration.t-position-fixed.t-w-100.t-h-100.calendar-book--opened > div.calendar-book__container'
    ).should('be.visible');
  }
  DEAL_ACTIVITIES_BOOK_DATE() {
    cy.get('#fcOne > div.fc-header-toolbar.fc-toolbar.fc-toolbar-ltr > div:nth-child(3) > button > span').click();
    cy.get(
      '#fcOne > div.fc-view-harness.fc-view-harness-passive > div > table > tbody > tr > td > div > div > div > table > tbody > tr:nth-child(1) > td.fc-daygrid-day.fc-day.fc-day-sat.fc-day-future.fc-daygrid-day-available > div > div.fc-daygrid-day-top > a'
    ).click();
    Utilities.createSnapshot('Deal-Activities-Calendar', { captureFullPage: false, enableStickyTrvHeader: true });
  }
  DEAL_ACTIVITIES_CONTINUE_BUTTON() {
    cy.get(
      '#app > main > div > div > div.calendar-book.t-migration.t-position-fixed.t-w-100.t-h-100.calendar-book--opened > div.calendar-book__container > div.calendar-book__inner.t-background-white.t-overflow-hidden > div.calendar-book__footer.t-visible-md.t-background-white > div > div.t-col-md-5.t-position-relative > div > button'
    ).click();
  }
  DEAL_ACTIVITY_BOOK_NOW_BUTTON() {
    cy.get(':nth-child(3) > .deal-sku__inner > .deal-sku__entry > .deal-sku__right > div > .t-btn').click();
  }
}
export default DEAL_DETAIL_PAGE;
