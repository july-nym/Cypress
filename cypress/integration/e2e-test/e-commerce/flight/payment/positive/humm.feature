@flight @positive @payment @humm @e2e

Feature: [Flight payment positive case using humm]

    In order to make flight payment positive case using humm works properly
    As a tester
    I want to create automation test on flight payment positive case using humm
    So that flight payment positive case using humm feature will works consistenly
    And reduce testing time process in the future

  Background: The user logged in with valid data
    Given The user is on the login page
    And The user fill the required data in login form
    When The user click the login button
    Then The user directed to the homepage

  @valid @oneWay
  Scenario: Booking domestic oneway flight until success
    Given The user is on the flight landing page in login state
    And The user search the domestic one way flight
    When The user click the flight search button
    Then The user should be directed to the flight search result page
    When The user select the domestic oneway flight product
    Then The user should be directed to the flight review page
    When The user click the flight "I'm ready to checkout" button
    Then The user should be directed to the flight checkout page
    And The user fill all flight checkout domestic detail form for 2 adults
    And The user choose to pay the product using valid humm
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay with humm" button
    Then The user should be directed to the humm login page
    And The user input the valid data on humm login form
    When The user click the humm "sign in" button
    Then The user should be directed to the "integration-cart" humm page
    And The user select the "fornightly payment"
    When The user click the humm "purchase" button
    Then The user should received text "Purchase complete!"
    Then The user should be directed to flight payment success status page
    Then The user go to the flight product detail page