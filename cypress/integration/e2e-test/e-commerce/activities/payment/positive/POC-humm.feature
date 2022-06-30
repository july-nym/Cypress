# @activities @payment @humm @global
Feature: [ACTIVITIES]

  In order to make payment testing process more faster and efficient
  As a user
  I want to Create automation test on payment process using humm
  On our activities module

  Scenario: Humm Payment process should be successful
    Given The user is on the activities landing page in logout state
    And The user search the desired activities
    When The user click the activities "search" button
    Then The user should be directed to the activities search result page
    When The user select the desired activities
    Then The user should be directed to the activities details page
    When The user click the "Book Now" button
    Then The user should be directed to the login page
    And The user fill the login form with valid email
    And The user fill the login form with valid password
    When The user click the "Log in" button
    Then The user should be directed to the activities details page
    When The user click the "Book Now" button
    Then The user should be directed to the activities checkout page
    And The user fill all activities checkout details forms
    When The user choose to pay the items with humm
    When The user clicks the activities "pay securely" button
    Then The user on humm login page
    When The user fill the credential humm account to the login form
    And The user click the humm "sign in" button
    Then The user is on the "integration-cart" humm page
    When The user select the "fornightly payment"
    And The user click the humm "purchase" button
    Then The user should received text "Purchase complete!"