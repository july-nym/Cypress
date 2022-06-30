@deal @negative @payment @stripe @e2e

Feature: [Deal payment negative case using stripe]

    In order to make deal payment negative case using stripe works properly
    As a tester
    I want to create automation test on deal payment negative case using stripe
    So that deal payment negative case using stripe feature will works consistenly
    And reduce testing time process in the future

  @visa @decline
  Scenario: Stripe payment process should be declined using invalid visa credential
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
    And The user fill the stripe details with invalid credit card
    Then The user should checks the deals "terms and conditions" checkbox
    When The user clicks the deals "pay securely" button
    Then The user should received "Your card was declined" alert after purchase the deal
