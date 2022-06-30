@accommodation @positive @payment @humm @e2e

Feature: [Accommodation payment positive case using humm]

    In order to make accommodation payment positive case using humm works properly
    As a tester
    I want to create automation test on accommodation payment positive case using humm
    So that accommodation payment positive case using humm feature will works consistenly
    And reduce testing time process in the future

  Background: The user logged in with valid data
    Given The user is on the login page
    And The user fill the required data in login form
    When The user click the login button
    Then The user directed to the homepage

  @valid
  Scenario: Booking 4 star hotel in Melbourne area until success
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
    And The user input the valid data on humm login form
    When The user click the humm "sign in" button
    Then The user should be directed to the "integration-cart" humm page
    And The user select the "fornightly payment"
    When The user click the humm "purchase" button
    Then The user should received text "Purchase complete!"
    Then The user should received accommodation "Success" payment status
