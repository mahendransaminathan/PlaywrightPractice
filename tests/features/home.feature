Feature: home functionality

  Scenario: User goes to Home Page successfully
    Given I am on the home page
    When I check for Get Started button
    Then I should see the button
