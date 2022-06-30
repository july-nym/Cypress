/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { accommodationLandingPage } from '../page-object/common/url';
import LandingPage from '../page-object/accommodation/landing-page';
import ProductPage from '../page-object/accommodation/product-page';
import CheckoutPage from '../page-object/accommodation/checkout-page';
import ProductDetailPage from '../page-object/accommodation/product-detail-page';

const landingPage = new LandingPage();
const productPage = new ProductPage();
const productDetailPage = new ProductDetailPage();
const checkoutPage = new CheckoutPage();

// <============================================================LANDING PAGE===========================================================>

Given('The user is on the accommodation landing page in login state', () => {
  cy.visit(accommodationLandingPage);
  cy.url().should('eq', accommodationLandingPage);
});

And('The user search accommodation in melbourne area', () => {
  landingPage.selectDestination();
  landingPage.selectCheckInDate();
  landingPage.selectCheckOutDate();
  landingPage.selectGuestAndRoom(2, 0); //Value of adult and children.
});

When('The user click the accommodation search hotel button', () => {
  landingPage.clickSearchHotelButton();
});

// <============================================================PRODUCT PAGE===========================================================>

Then('The user should be directed to the accommodation search result page', () => {
  cy.url().should('include', 'search');
});

When('The user select the 4 star hotel in melbourne area', () => {
  productPage.select4StarHotelInMelbourneArea();
});

// <============================================================PRODUCT DETAIL PAGE===========================================================>

Then('The user should be directed to the accommodation product detail page', () => {
  cy.url().should('include', 'detail');
});

When('The user select the accommodation superior room', () => {
  productDetailPage.clickSeeRoomAvailableButton();
  productDetailPage.selectSuperiorRoom();
});

// <============================================================CHECKOUT PAGE===========================================================>

// CUSTOMER INFO PAGE ==>

Then('The user should be directed to the accommodation customer info page', () => {
  cy.url().should('include', 'customer');
});

And('The user fill the accommodation required customer data', () => {
  checkoutPage.customerData();
});

When('The user click the accommodation continue the payment button', () => {
  checkoutPage.continueToPaymentButton();
});

Then('The user should received "Your card was declined" alert after purchase the accommodation', () => {
  checkoutPage.declineAlert();
});

// PAYMENT INFO PAGE ==>

Then('The user should be directed to the accommodation payment info page', () => {
  cy.url().should('include', 'payment');
  checkoutPage.selectDonation();
});

And('The user check all accommodation "terms and conditions" checkbox', () => {
  checkoutPage.agreedTOS();
});

When('The user click the accommodation "pay securely" button', () => {
  checkoutPage.paySecurelyButton();
});

Then('The user should be directed to accommodation payment decline status page', () => {
  checkoutPage.hummDeclineAlert();
});

// <============================================================PAYMENT STATUS PAGE===========================================================>

Then('The user should received accommodation "Success" payment status', () => {
  cy.url().should('include', 'bookdata');
  cy.get('h3').should('contain', 'Success');
});
