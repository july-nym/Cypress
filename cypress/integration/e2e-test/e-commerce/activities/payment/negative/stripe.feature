@activities @negative @payment @stripe @e2e

Feature: [Activities payment negative case using stripe]

    In order to make activities payment negative case using stripe works properly
    As a tester
    I want to create automation test on activities payment negative case using stripe
    So that activities payment negative case using stripe feature will works consistenly
    And reduce testing time process in the future

  Background: The user logged in with valid data
    Given The user is on the login page
    And The user fill the required data in login form
    When The user click the login button
    Then The user directed to the homepage

  @visa @decline
  Scenario: Booking snorkling activities should be declined
    Given The user is on the activities landing page in login state
    And The user search indoor activities
    When The user click the search activities button
    Then The user should be directed to the activities search result page
    When The user select the snorkling product
    Then The user should be directed to the activities product detail page
    When The user click the activities book now button
    Then The user should be directed to the activities checkout page
    And The user fill the activities required customer data
    And The user choose to pay the product using invalid visa card
    And The user check all activities "terms and conditions" checkbox
    When The user click the activities "pay securely" button
    Then The user should received "Your card was declined" alert after purchase the activities