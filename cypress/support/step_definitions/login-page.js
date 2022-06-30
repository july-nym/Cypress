/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { homePage, loginPage } from '../page-object/common/url';
import utilities from '../page-object/common/utilities';

Given('The user is on the login page', () => {
  cy.visit(loginPage);
  cy.url().should('eq', loginPage);
});

And('The user fill the required data in login form', () => {
  cy.fixture('userLoginData').then((user) => {
    cy.get('#email').clear().type(user.validEmail);
    cy.get('#email').should('have.value', user.validEmail);
    cy.get('#password').clear().type(user.validPassword, { log: false });
  });
});

And('The user fill the fraud data in login form', () => {
  cy.fixture('userLoginData').then((user) => {
    cy.get('#email').clear().type(user.fraudEmail);
    cy.get('#email').should('have.value', user.fraudEmail);
    cy.get('#password').clear().type(user.fraudPassword, { log: false });
  });
});

When('The user click the login button', () => {
  cy.get('#btn-submit').click();
});

Then('The user directed to the homepage', () => {
  cy.url().should('eq', homePage);
  utilities.cookiesButton();
});
