/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { activitiesLandingPage } from '../page-object/common/url';
import LandingPage from '../page-object/activities/landing-page';
import ProductPage from '../page-object/activities/product-page';
import ProductDetailPage from '../page-object/activities/product-detail-page';
import CheckoutPage from '../page-object/activities/checkout-page';

const landingPage = new LandingPage();
const productPage = new ProductPage();
const productDetailPage = new ProductDetailPage();
const checkoutPage = new CheckoutPage();
// <============================================================LANDING PAGE===========================================================>

Given('The user is on the activities landing page in login state', () => {
  cy.visit(activitiesLandingPage);
  cy.url().should('eq', activitiesLandingPage);
});

And('The user search indoor activities', () => {
  landingPage.searchActivities();
});

When('The user click the search activities button', () => {
  landingPage.clickSearchActivitiesButton();
});

// <============================================================PRODUCT PAGE===========================================================>

Then('The user should be directed to the activities search result page', () => {
  cy.url().should('include', 'search');
});

When('The user select the snorkling product', () => {
  productPage.selectActivities();
});

// <============================================================PRODUCT DETAIL PAGE===========================================================>

Then('The user should be directed to the activities product detail page', () => {
  cy.url().should('include', 'activities');
});

When('The user click the activities book now button', () => {
  productDetailPage.clickBookNowButton();
});

// <============================================================CHECKOUT PAGE===========================================================>

Then('The user should be directed to the activities checkout page', () => {
  cy.url().should('include', 'checkout');
});

And('The user fill the activities required customer data', () => {
  checkoutPage.inputCustomerData();
});

And('The user check all activities "terms and conditions" checkbox', () => {
  checkoutPage.agreedTOS();
});

When('The user click the activities "pay securely" button', () => {
  checkoutPage.paySecurelyButton();
});

Then('The user should received "Your card was declined" alert after purchase the activities', () => {
  checkoutPage.declineAlert();
});

// <============================================================PAYMENT STATUS PAGE===========================================================>

Then('The user should received activities "Success" payment status', () => {
  cy.url().should('contain', 'confirmation');
  cy.get(':nth-child(6) > .t-col-9 > strong').contains('PAID');
});
