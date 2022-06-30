@accommodation @negative @payment @humm @e2e

Feature: [Accommodation payment negative case using humm]

    In order to make accommodation payment negative case using humm works properly
    As a tester
    I want to create automation test on accommodation payment negative case using humm
    So that accommodation payment negative case using humm feature will works consistenly
    And reduce testing time process in the future

  Background: The user logged in with valid data
    Given The user is on the login page
    And The user fill the required data in login form
    When The user click the login button
    Then The user directed to the homepage

  @invalid @decline
  Scenario: Booking 4 star hotel in Melbourne area should be declined
    Given The user is on the accommodation landing page in login state
    And The user search accommodation in melbourne area
    When The user click the accommodation search hotel button
    Then The user should be directed to the accommodation search result page
    When The user select the 4 star hotel in melbourne area
    Then The user should be directed to the accommodation product detail page
    When The user select the accommodation superior room
    Then The user should be directed to the accommodation customer info page
    And The user fill the accommodation required customer data
    When The user click the accommodation continue the payment button
    Then The user should be directed to the accommodation payment info page
    And The user choose to pay the product using valid humm
    And The user check all accommodation "terms and conditions" checkbox
    When The user click the accommodation "pay with humm" button
    Then The user should be directed to the humm login page
    And The user input the invalid data for decline purpose on humm login form
    When The user click the humm "sign in" button
    Then The user is on the humm decline page
    When The user click the "Back to merchant site" button
    Then The user should be directed to accommodation payment decline status page