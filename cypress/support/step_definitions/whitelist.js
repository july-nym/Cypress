/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('The user is on the orchard cms login page', function () {
  cy.visit('https://admin.freya.travlr.com/Login?ReturnUrl=%2Fadmin');
});

And('The user fill the orchard login form with valid email', function () {
  cy.get('#UserName').type('admin');
});

And('The user fill the orchard login form with valid password', function () {
  cy.get('#Password').type('Travlr@2019');
});

And('The user click the orchardd login button', function () {
  cy.get('.btn').click();
});

Then('The user is on the CMS homepage', function () {
  cy.location().should((loc) => {
    expect(loc.href).to.include('/admin');
  });
});

And('The user the user management tab', function () {
  cy.get('#usermanagement > label.item-label > .btn-nostyle').click();
});

And('The user select the manage user tab', function () {
  cy.contains('Manage User').click();
});

And('The user type "komang" on the search bar', function () {
  cy.get('#Options_Search').type('komang');
});

And('The user click the search button', function () {
  cy.get('#btnSearch').click();
});

And('The user select the platform for "bali"', function () {
  cy.get('#platform-selector').select('Bali');
});

And('The user click the fraud whitelist button', function () {
  cy.get(':nth-child(1) > [align="left"] > .related > .btn-fraud').click();
});

And('The user select the "platform" brand', function () {
  cy.get('#fraudBrandId').select('platform');
});

When('The user click the add fraud list button', function () {
  cy.get('#btnfraudModal').click();
});

Then('The "fraud whitelist input created" text should be visible', function () {
  cy.get('#modalFraud > .modal-dialog > form > .modal-content > .modal-body > #msg > .alert-message').should(
    'contain',
    'Fraud Whitelist Input Created'
  );
});

And('The user close the "select brand fraud pop-up"', function () {
  cy.get('#modalFraud > .modal-dialog > form > .modal-content > .modal-header > .close').click();
});

And('The user select the platform for "global"', function () {
  cy.get('#platform-selector').select('Global');
});

And('The user select the "10travlr" brand', function () {
  cy.get('#fraudBrandId').select('isite_travlr10');
});

And('The user select the "bookafly" brand', function () {
  cy.get('#fraudBrandId').select('isite_bookafly');
});
