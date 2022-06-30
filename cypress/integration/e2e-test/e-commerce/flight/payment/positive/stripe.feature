@flight @positive @payment @stripe @e2e

Feature: [Flight payment positive case using stripe]

    In order to make flight payment positive case using stripe works properly
    As a tester
    I want to create automation test on flight payment positive case using stripe
    So that flight payment positive case using stripe feature will works consistenly
    And reduce testing time process in the future

  Background: The user logged in with valid data
    Given The user is on the login page
    And The user fill the required data in login form
    When The user click the login button
    Then The user directed to the homepage

  @visa @valid @domestic @oneWay
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
    And The user choose to pay the product using valid visa card
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay securely" button
    Then The user should received flight "Booking success!" payment status
    Then The user go to the flight product detail page

  @visa @valid @return @international @unpaired
  Scenario: Booking international return unpaired flight until success
    Given The user is on the flight landing page in login state
    And The user search the international return flight
    When The user click the flight search button
    Then The user should be directed to the flight search result page
    When The user select the outbound international return unpaired flight product
    And The user select the inbound international return unpaired flight product
    Then The user should be directed to the flight review page
    When The user click the flight "I'm ready to checkout" button
    Then The user should be directed to the flight checkout page
    And The user fill all flight checkout international detail form for 1 adult 1 child and 1 infant
    And The user choose to pay the product using valid visa card
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay securely" button
    Then The user should received flight "Booking success!" payment status
    Then The user go to the flight product detail page

  @visa @valid @return @international @paired
  Scenario: Booking international return paired flight until success
    Given The user is on the flight landing page in login state
    And The user search the international return flight
    When The user click the flight search button
    Then The user should be directed to the flight search result page
    When The user select the outbound international return paired flight product
    And The user select the inbound international return paired flight product
    Then The user should be directed to the flight review page
    When The user click the flight "I'm ready to checkout" button
    Then The user should be directed to the flight checkout page
    And The user fill all flight checkout international detail form for 1 adult 1 child and 1 infant
    And The user choose to pay the product using valid visa card
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay securely" button
    Then The user should received flight "Booking success!" payment status
    Then The user go to the flight product detail page

  @visa @valid @return @domestic @unpaired
  Scenario: Booking domestic return unpaired flight until success 
    Given The user is on the flight landing page in login state
    And The user search domestic return flight
    When The user click the flight search button
    Then The user should be directed to the flight search result page
    When The user select the outbound domestic return unpaired flight product
    And The user select the inbound domestic return unpaired flight product
    Then The user should be directed to the flight review page
    When The user click the flight "I'm ready to checkout" button
    Then The user should be directed to the flight checkout page
    And The user fill all flight checkout domestic detail form for 1 adult 1 child and 1 infant
    And The user choose to pay the product using valid visa card
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay securely" button
    Then The user should received flight "Booking success!" payment status
    Then The user go to the flight product detail page

  @visa @valid @return @domestic @paired
  Scenario: Booking domestic return paired flight until success
    Given The user is on the flight landing page in login state
    And The user search domestic return flight
    When The user click the flight search button
    Then The user should be directed to the flight search result page
    When The user select the outbound domestic return paired flight product
    And The user select the inbound domestic return paired flight product
    Then The user should be directed to the flight review page
    When The user click the flight "I'm ready to checkout" button
    Then The user should be directed to the flight checkout page
    And The user fill all flight checkout domestic detail form for 1 adult 1 child and 1 infant
    And The user choose to pay the product using valid visa card
    And The user check all flight "terms and conditions" checkbox
    When The user click the flight "pay securely" button
    Then The user should received flight "Booking success!" payment status
    Then The user go to the flight product detail page
