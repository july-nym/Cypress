/// <reference types="cypress" />

import {
  CARD_DECLINE_ALERT,
  PAY_SECURELY_BUTTON,
  PRIMARY_COUNTRY_CODE_COLUMN,
  PRIMARY_COUNTRY_CODE_LIST,
  PRIMARY_COUNTRY_OF_BIRTH,
  PRIMARY_GENDER,
  PRIMARY_PASSPORT_COUNTRY,
  PRIMARY_PHONE_NUMBER,
  PRIMARY_TITLE,
  SECONDARY_COUNTRY_OF_BIRTH,
  SECONDARY_GENDER,
  SECONDARY_PASSPORT_COUNTRY,
  SECONDARY_TITLE,
  THIRD_COUNTRY_OF_BIRTH,
  THIRD_GENDER,
  THIRD_PASSPORT_COUNTRY,
  THIRD_TITLE,
} from '../common/selector/flight';

import utilities from '../common/utilities';
class CheckoutPage {
  inputDomesticPrimaryData() {
    cy.get(PRIMARY_TITLE).select('Mr');
    cy.get('#firstName0').clear().type('Komang');
    cy.get('#middleName0').clear().type('Julian');
    cy.get('#lastName0').clear().type('Rothschild');
    cy.get(PRIMARY_COUNTRY_CODE_COLUMN).click();
    cy.get(PRIMARY_COUNTRY_CODE_LIST).contains('Australia').click();
    cy.get(PRIMARY_PHONE_NUMBER).clear().type('1237856734');
    cy.get('#email').clear().type('email.receiver.travlr@gmail.com');
    cy.get('#postcode').clear().type('80225');
  }

  inputDomesticSecondaryData() {
    cy.get(SECONDARY_TITLE).select('Mrs');
    cy.get('#firstName1').clear().type('Kadek');
    cy.get('#middleName1').clear().type('Julian');
    cy.get('#lastName1').clear().type('Rothschild');
    cy.get('body').then(($body) => {
      if ($body.find('#birthDate1').length > 0) {
        cy.get('#birthDate1').clear().type('{selectall}28 Jun 2018{enter}');
      } else {
        return false;
      }
    });
  }

  inputDomesticPrimaryDataForDecline() {
    cy.get(PRIMARY_TITLE).select('Mr');
    cy.get('#firstName0').clear().type('Komang');
    cy.get('#middleName0').clear().type('Julian');
    cy.get('#lastName0').clear().type('Rothschild');
    cy.get(PRIMARY_COUNTRY_CODE_COLUMN).click();
    cy.get(PRIMARY_COUNTRY_CODE_LIST).contains('Australia').click();
    cy.get(PRIMARY_PHONE_NUMBER).clear().type('1237856734');
    cy.get('#email').clear().type('decline@forter.com');
    cy.get('#postcode').clear().type('80225');
  }

  inputInternationalPrimaryData() {
    cy.get(PRIMARY_TITLE).select('Mr');
    cy.get('#firstName0').clear().type('Komang');
    cy.get('#middleName0').clear().type('Julian');
    cy.get('#lastName0').clear().type('Rothschild');
    cy.get(PRIMARY_COUNTRY_CODE_COLUMN).click();
    cy.get(PRIMARY_COUNTRY_CODE_LIST).contains('Australia').click();
    cy.get(PRIMARY_PHONE_NUMBER).clear().type('1237856734');
    cy.get('#email').clear().type('email.receiver.travlr@gmail.com');
    cy.get('#postcode').clear().type('80225');
    cy.get('#birthDate0').clear().type('{selectall}01 Jul 1992{enter}');
    cy.get(PRIMARY_COUNTRY_OF_BIRTH).select('Indonesia');
    cy.get(PRIMARY_GENDER).select('Male');
    cy.get(PRIMARY_PASSPORT_COUNTRY).select('Indonesia');
    cy.get('#passportNumber0').type('2414124141');
    cy.get('#passportExpiryDate0').clear().type('{selectall}28 Jun 2023{enter}');
  }

  inputInternationalSecondaryData() {
    cy.get('#firstName1').clear().type('Kadek');
    cy.get('#middleName1').clear().type('Julian');
    cy.get('#lastName1').clear().type('Rothschild');
    cy.get('#birthDate1').clear().type('{selectall}28 Jun 2018{enter}');
    cy.get(SECONDARY_COUNTRY_OF_BIRTH).select('Indonesia');
    cy.get(SECONDARY_GENDER).select('Male');
    cy.get(SECONDARY_PASSPORT_COUNTRY).select('Indonesia');
    cy.get('#passportNumber1').type('2418654141');
    cy.get('#passportExpiryDate1').clear().type('{selectall}28 Jun 2023{enter}');
  }

  inputInternationalThirdData() {
    cy.get(THIRD_TITLE).select('Lady');
    cy.get('#firstName2').clear().type('Ketut');
    cy.get('#middleName2').clear().type('Julian');
    cy.get('#lastName2').clear().type('Rothschild');
    cy.get('#birthDate2').clear().type('{selectall}01 Jan 2022{enter}');
    cy.get(THIRD_COUNTRY_OF_BIRTH).select('Indonesia');
    cy.get(THIRD_GENDER).select('Female');
    cy.get(THIRD_PASSPORT_COUNTRY).select('Indonesia');
    cy.get('#passportNumber2').type('2418632141');
    cy.get('#passportExpiryDate2').clear().type('{selectall}28 Jun 2023{enter}');
  }

  inputDomesticThirdData() {
    cy.get(THIRD_TITLE).select('Lady');
    cy.get('#firstName2').clear().type('Ketut');
    cy.get('#middleName2').clear().type('Julian');
    cy.get('#lastName2').clear().type('Rothschild');
    cy.get('#birthDate2').clear().type('{selectall}01 Jan 2022{enter}');
  }

  agreedTermsAndConditions() {
    cy.get('#isAgreedWithPassport').check({ force: true });
    cy.get('#isAgreedWithFareRule').check({ force: true });
    cy.get('#isAgreedWithTOS').check({ force: true });
    cy.get('#marketing_permissions_optout').check({ force: true });
  }

  clickPaySecurelyButton() {
    cy.get(PAY_SECURELY_BUTTON).click();
  }

  declineAlert() {
    cy.get(CARD_DECLINE_ALERT).should('contain', 'Your card was declined.');
    utilities.createSnapshot('FlightCardDeclineAlert');
  }
}
export default CheckoutPage;
