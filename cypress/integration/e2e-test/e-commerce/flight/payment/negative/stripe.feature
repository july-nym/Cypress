@flight @negative @payment @stripe @e2e

Feature: [Flight payment negative case using stripe]

    In order to make flight payment negative case using stripe works properly
    As a tester
    I want to create automation test on flight payment negative case using stripe
    So that flight payment negative case using stripe feature will works consistenly
    And reduce testing time process in the future

  Background: The user logged in with fraud data
    Given The user is on the login page
    And The user fill the fraud data in login form
    When The user click the login button
    Then The user directed to the homepage

  @visa @decline @oneWay
  Scenario: Booking domestic oneway flight should be declined
    Given The user is on the flight landing page in login state
    And The user search the domestic one way flight
    When The user click the flight search button
    Then The user should be directed to the flight search result page
    When The user select the domestic oneway flight product
    Then The user should be directed to the flight review page
    When The user click the flight "I'm ready to checkout" button
    Then The user should be directed to the flight checkout page
    And The user fill all flight checkout domestic detail form for 2 adults
    And The user choose to pay the product using invalid visa card
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay securely" button
    Then The user should received "Your card was declined" alert after purchase the flight

  @visa @fraud
  Scenario: Booking domestic oneway flight should be detected as fraud
    Given The user is on the flight landing page in login state
    And The user search the domestic one way flight
    When The user click the flight search button
    Then The user should be directed to the flight search result page
    When The user select the domestic oneway flight product
    Then The user should be directed to the flight review page
    When The user click the flight "I'm ready to checkout" button
    Then The user should be directed to the flight checkout page
    And The user fill all flight checkout domestic detail form with forter email
    And The user choose to pay the product using valid visa card
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay securely" button
    Then The user should received "Suspicious Transaction Detected" page after purchase flight