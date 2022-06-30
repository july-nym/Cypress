/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { flightLandingPage } from '../page-object/common/url';
import utilities from '../page-object/common/utilities';
import LandingPage from '../page-object/flight/landing-page';
import ProductPage from '../page-object/flight/product-page';
import ReviewPage from '../page-object/flight/review-page';
import CheckoutPage from '../page-object/flight/checkout-page';
import { PAYMENT_STATUS_TEXT, SUSPICIOUS_TEXT } from '../page-object/common/selector/flight';

const landingPage = new LandingPage();
const productPage = new ProductPage();
const reviewPage = new ReviewPage();
const checkoutPage = new CheckoutPage();

const baseURL = 'https://10travlr.freya.travlr.com';

// <============================================================LANDING PAGE===========================================================>

Given('The user is on the flight landing page in login state', () => {
  cy.visit(flightLandingPage);
  cy.url().should('eq', flightLandingPage);
});

And('The user search the domestic one way flight', () => {
  landingPage.clickOnewayRadioButton();
  landingPage.selectDestinationFrom('Melbourne');
  landingPage.selectDestinationTo('Sydney');
  landingPage.selectOnewayDate();
  landingPage.inputPassenger(2, 0, 0); //Sorted from adult,child and infant.
  landingPage.selectCabinClass('Economy');
});

And('The user search the international return flight', () => {
  landingPage.clickReturnRadioButton();
  landingPage.selectDestinationFrom('Singapore');
  landingPage.selectDestinationTo('Melbourne');
  landingPage.selectDepartAndReturnDate();
  landingPage.inputPassenger(1, 1, 1); //Sorted from adult,child and infant.
  landingPage.selectCabinClass('Economy');
});

And('The user search domestic return flight', () => {
  landingPage.clickReturnRadioButton();
  landingPage.selectDestinationFrom('Melbourne');
  landingPage.selectDestinationTo('Auckland');
  landingPage.selectDepartAndReturnDate();
  landingPage.inputPassenger(1, 1, 1); //Sorted from adult,child and infant.
  landingPage.selectCabinClass('Economy');
});

When('The user click the flight search button', () => {
  landingPage.clickSearchButton();
});

// <============================================================PRODUCT PAGE===========================================================>

Then('The user should be directed to the flight search result page', () => {
  cy.url().should('include', 'search');
});

When('The user select the domestic oneway flight product', () => {
  productPage.selectDomesticOnewayProduct(0);
});

When('The user select the outbound international return unpaired flight product', () => {
  productPage.selectOutboundInternationalReturnUnpairedProduct(7);
});

And('The user select the inbound international return unpaired flight product', () => {
  productPage.selectInboundInternationalReturnUnpairedProduct(0);
});

When('The user select the outbound international return paired flight product', () => {
  productPage.selectOutboundInternationalReturnPairedProduct(0);
});

And('The user select the inbound international return paired flight product', () => {
  productPage.selectInboundInternationalReturnPairedProduct(0);
});

When('The user select the outbound domestic return unpaired flight product', () => {
  productPage.selectOutboundDomesticReturnUnpairedProduct(15);
});

And('The user select the inbound domestic return unpaired flight product', () => {
  productPage.selectInboundDomesticReturnUnpairedProduct(0);
});

When('The user select the outbound domestic return paired flight product', () => {
  productPage.selectOutboundDomesticReturnPairedProduct(0);
});

And('The user select the inbound domestic return paired flight product', () => {
  productPage.selectInboundDomesticReturnPairedProduct(0);
});

// <============================================================REVIEW PAGE===========================================================>

Then('The user should be directed to the flight review page', () => {
  reviewPage.directedToReviewPage();
});

When('The user click the flight "I\'m ready to checkout" button', () => {
  reviewPage.clickIamReadyToCheckoutButton();
});

// <============================================================CHECKOUT PAGE===========================================================>

Then('The user should be directed to the flight checkout page', () => {
  cy.url().should('include', 'checkout');
});

And('The user fill all flight checkout domestic detail form for 2 adults', () => {
  checkoutPage.inputDomesticPrimaryData();
  checkoutPage.inputDomesticSecondaryData();
});

And('The user fill all flight checkout international detail form for 1 adult 1 child and 1 infant', () => {
  checkoutPage.inputInternationalPrimaryData();
  checkoutPage.inputInternationalSecondaryData();
  checkoutPage.inputInternationalThirdData();
});

And('The user fill all flight checkout domestic detail form for 1 adult 1 child and 1 infant', () => {
  checkoutPage.inputDomesticPrimaryData();
  checkoutPage.inputDomesticSecondaryData();
  checkoutPage.inputDomesticThirdData();
});

And('The user fill all flight checkout domestic detail form with forter email', () => {
  checkoutPage.inputDomesticPrimaryDataForDecline();
  checkoutPage.inputDomesticSecondaryData();
});

And('The user check all flight "terms and conditions" checkbox', () => {
  checkoutPage.agreedTermsAndConditions();
});

When('The user click the flight "pay securely" button', () => {
  checkoutPage.clickPaySecurelyButton();
});

Then('The user should received "Your card was declined" alert after purchase the flight', () => {
  checkoutPage.declineAlert();
});

// <============================================================PAYMENT STATUS PAGE===========================================================>

Then('The user should received flight "Booking success!" payment status', () => {
  cy.get(PAYMENT_STATUS_TEXT).should('contain', 'Booking success!');
  utilities.uncaughtException();
  utilities.createSnapshot('FlightPaymentStatusPage');
});

Then('The user should received "Suspicious Transaction Detected" page after purchase flight', () => {
  cy.get(SUSPICIOUS_TEXT).should('contain', 'Suspicious Transaction Detected');
  utilities.uncaughtException();
  utilities.createSnapshot('Flight-Fraud-Page');
});

// <============================================================PRODUCT DETAIL PAGE===========================================================>

Then('The user go to the flight product detail page', () => {
  cy.url().then((url) => {
    var transactionFlightID = url.split('/').pop();
    cy.visit(`${baseURL}/booking/flights-v2/${transactionFlightID}`);
  });
  utilities.createSnapshot('FlightProductDetailPage');
});
