@whitelist
Feature: Whitelist the user email

  In order to make user email accepted on each payment
  As a user
  I want to whitelist the user email before run the test

  Scenario: Whitelist email on all WLP
    Given The user is on the orchard cms login page
    And The user fill the orchard login form with valid email
    And The user fill the orchard login form with valid password
    And The user click the orchardd login button
    Then The user is on the CMS homepage
    And The user the user management tab
    And The user select the manage user tab
    And The user type "komang" on the search bar
    And The user click the search button
    And The user select the platform for "bali"
    And The user click the fraud whitelist button
    And The user select the "platform" brand
    When The user click the add fraud list button
    Then The "fraud whitelist input created" text should be visible
    And The user close the "select brand fraud pop-up"
    And The user select the platform for "global"
    And The user click the fraud whitelist button
    And The user select the "10travlr" brand
    When The user click the add fraud list button
    Then The "fraud whitelist input created" text should be visible
    And The user select the "bookafly" brand
    When The user click the add fraud list button
    Then The "fraud whitelist input created" text should be visible
