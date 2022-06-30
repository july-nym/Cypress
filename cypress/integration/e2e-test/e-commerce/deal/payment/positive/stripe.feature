@deal @positive @payment @stripe @e2e

Feature: [Deal payment positive case using stripe]

    In order to make deal payment positive case using stripe works properly
    As a tester
    I want to create automation test on deal payment positive case using stripe
    So that deal payment positive case using stripe feature will works consistenly
    And reduce testing time process in the future

  @visa @bookable @valid
  Scenario: Stripe payment process should be successful using valid visa credential
    Given The user is on the deal landing page in logout state
    And The user search the desired deal
    When The user click the deal "search" button
    Then The user should be directed to the deal search result page
    When The user select the desired deal
    Then The user should be directed to the deal details page
    When The user clicks the login button on the header
    Then The user should be directed to the login page
    And The user fill the login form with valid email
    And The user fill the login form with valid password
    When The user click the "Log in" button
    Then The user should be directed to the deal details page
    When The user click the "choose your option" button
    And The user click the deal "Buy Now" button
    Then The user should be directed to the deal review page
    When The user click the deal "I am ready to checkout" button
    Then The user should be directed to the deals checkout page
    And The user fill all deals checkout details forms
    When The user choose to pay the items with credit card
    And The user fill the credit card details
    Then The user should checks the deals "terms and conditions" checkbox
    When The user clicks the deals "pay securely" button
    Then The user should received "PAID" payment status after purchase the deal
    When The user click the "my bookings deals" button on deal checkout page
    Then The user should be directed to the my booking and deal page
    And The user click the deals tab
    When The user click the first deal product
    Then The user directed to the deal product detail page
