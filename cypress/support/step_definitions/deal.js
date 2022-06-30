/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('The user is on the deal landing page in logout state', function () {
  cy.VISIT_DEAL_LANDING_PAGE();
});

And('The user search the desired deal', function () {
  cy.FILL_DEAL_SEARCH_COLUMN();
});

When('The user click the deal "search" button', function () {
  cy.DEAL_SEARCH_BUTTON();
});

Then('The user should be directed to the deal search result page', function () {
  cy.DEAL_SEARCH_RESULT_PAGE();
});

When('The user select the desired deal', function () {
  cy.SELECT_DESIRED_DEAL();
});

Then('The user should be directed to the deal details page', function () {
  cy.DEAL_DETAIL_PAGE();
});

When('The user click the "choose your option" button', function () {
  cy.CHOOSE_YOUR_OPTION_BUTTON();
});

And('The user click the deal "Buy Now" button', function () {
  cy.BUY_NOW_BUTTON();
});

Then('The user should be directed to the deal review page', function () {
  cy.DEAL_REVIEW_PAGE();
});

And('The user check the deal "fine print" checkbox', function () {
  cy.DEAL_FINE_PRINT_CHECKBOX();
});

When('The user click the deal "I am ready to checkout" button', function () {
  cy.DEAL_READY_CHECKOUT_BUTTON();
});

Then('The user should be directed to the deals checkout page', function () {
  cy.DEAL_CHECKOUT_PAGE();
});

When('The user click the deal image header on the checkout page', function () {
  cy.IMAGE_HEADER_DEAL_CHECKOUT_PAGE();
});

And('The user fill all deals checkout details forms', function () {
  cy.DEAL_CHECKOUT_DETAILS_FORM();
});

Then('The user should checks the deals "terms and conditions" checkbox', function () {
  cy.DEAL_TERM_CONDITION_CHECKBOX();
});

When('The user clicks the deals "pay securely" button', function () {
  cy.DEAL_PAY_SECURELY_BUTTON();
});

Then('The user should received "PAID" payment status after purchase the deal', function () {
  cy.DEAL_PAID_STATUS_OK();
});

When('The user click the deal siteminder product', function () {
  cy.DEAL_SITEMINDER_PRODUCT();
});

And('The user click the deal siteminder "Buy Now" button', function () {
  cy.DEAL_SITEMINDER_BUY_NOW_BUTTON();
});

And('The user select the desired date on availability calendar', function () {
  cy.DATE_AVAILABILITY_CALENDAR();
});

And('The user click the availability calendar "Continue" button', function () {
  cy.AVAILABILITY_CALENDAR_CONTINUE_BUTTON();
});

And('The user fill all deals siteminder checkout details forms', function () {
  cy.DEAL_SITEMINDER_CHECKOUT_FORM();
});

Then('The user should received "Your card was declined" alert after purchase the deal', function () {
  cy.DEAL_CARD_DECLINED_ALERT();
});

Then('The user should received "Transaction under manual processing" page after purchase deal', function () {
  cy.DEAL_FRAUD_PAGE();
});

When('The user click the deal remove button', function () {
  cy.DEAL_ITEM_REMOVE_BUTTON();
});

And('The deal remove item confirmation content should be exist', function () {
  cy.DEAL_REMOVE_CONTENT_POP_UP();
});

And('The user click the deal content remove button', function () {
  cy.DEAL_CONTENT_REMOVE_BUTTON();
});

And('The deal item should not exist', function () {
  cy.DEAL_ITEM_SHOULD_NOT_EXIST();
});

Then('The user is directed to the deal cart checkout page', function () {
  cy.DEAL_CART_CHECKOUT_PAGE();
});

And('The user see the deal "Your card is empty" text', function () {
  cy.DEAL_YOUR_CART_EMPTY_TEXT();
});

When('The user click the deal "Continue Shopping" Button', function () {
  cy.DEAL_CONTINUE_SHOPPING_BUTTON();
});

Then('The user is directed to the deal search page', function () {
  cy.DEAL_SEARCH_PAGE();
});

When('The user click the deal image header on the review page', function () {
  cy.IMAGE_HEADER_DEAL_REVIEW_PAGE();
});

And('The user go to the deal landing page', function () {
  cy.GO_TO_DEAL_LANDING_PAGE();
});

And('The user click the deal cart logo', function () {
  cy.DEAL_CART_LOGO();
});

When('The user click the "my bookings deals" button on deal checkout page', function () {
  cy.CLICK_MY_BOOKING_DEAL_CHECKOUT_PAGE_BUTTON();
});

And('The user search the accommodation deal product', function () {
  cy.SEARCH_DEAL_ACCOMMODATION_PRODUCT();
});

And('The user select the accommodation deal product', function () {
  cy.SELECT_ACCOMMODATION_DEAL_PRODUCT();
});

And('The user click the deal "Book now" button', function () {
  cy.CLICK_ACCOMMODATION_DEAL_BOOK_NOW_BUTTON();
});

Then('The accommodation deal calendar should be visible', function () {
  cy.ACCOMMODATION_DEAL_CALENDAR();
});

And('The user select desired book date', function () {
  cy.SELECT_ACCOMMODATION_DEAL_BOOK_DATE();
});

When('The user click the accommodation deal "continue" button', function () {
  cy.ACCOMMODATION_DEAL_CONTINUE_BUTTON();
});

And('The user fill the accommodation deal guest information form', function () {
  cy.ACCOMMODATION_DEAL_GUEST_INFORMATION_FORM();
});

And('The user check the deal "fine print" checkbox', function () {
  cy.ACCOMMODATION_DEAL_FINE_PRINT_CHECKBOX();
});

And('The user click the deal "Book later" button', function () {
  cy.CLICK_ACCOMMODATION_DEAL_BOOK_LATER_BUTTON();
});

And('The user search the deal activities product', function () {
  cy.SEARCH_DEAL_ACTIVITIES_PRODUCT();
});

And('The user select the deal activities product', function () {
  cy.SELECT_DEAL_ACTIVITIES_PRODUCT();
});

Then('The deal activities calendar should be visible', function () {
  cy.DEAL_ACTIVITIES_CALENDAR();
});

And('The user select desired deal activities book date', function () {
  cy.DEAL_ACTIVITIES_BOOK_DATE();
});

When('The user click the deal activities "continue" button', function () {
  cy.DEAL_ACTIVITIES_CONTINUE_BUTTON();
});

And('The user fill the deal activities guest information form', function () {
  cy.DEAL_ACTIVITIES_GUEST_INFORMATION_FORM();
});

And('The user click the deal activity "Book now" button', function () {
  cy.DEAL_ACTIVITY_BOOK_NOW_BUTTON();
});
And('The user fill all deals non login checkout details forms', function () {
  cy.DEAL_NON_LOGIN_CHECKOUT_FORM();
});
