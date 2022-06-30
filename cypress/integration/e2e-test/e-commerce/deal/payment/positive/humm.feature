@deal @positive @payment @humm @e2e

Feature: [Deal payment positive case using humm]

    In order to make deal payment positive case using humm works properly
    As a tester
    I want to create automation test on deal payment positive case using humm
    So that deal payment positive case using humm feature will works consistenly
    And reduce testing time process in the future

  @valid @bookable
  Scenario: Humm Payment process should be successful using valid humm credential
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
    When The user choose to pay the items with humm
    Then The user should checks the deals "terms and conditions" checkbox
    When The user clicks the deals "pay securely" button
    Then The user on humm login page
    When The user fill the credential humm account to the login form
    And The user click the humm "sign in" button
    Then The user is on the "integration-cart" humm page
    When The user select the "fornightly payment"
    And The user click the humm "purchase" button
    Then The user should received text "Purchase complete!"
    And The user redirected to the deal payment status page
    When The user click the "my bookings deals" button on deal checkout page
    Then The user should be directed to the my booking and deal page
    And The user click the deals tab
    When The user click the first deal product
    Then The user directed to the deal product detail page