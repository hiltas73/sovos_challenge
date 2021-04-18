@wip
Feature: Search functionality

  Background:
    Given the user is on the home page

  Scenario Outline:
    When the user enters "<keyword>" on the search box
    And the user clicks the search button
    Then the same "<keyword>" should be seen on the result text

    Examples:
      |keyword |
      |PS5     |
      |PS4     |


    Scenario:
      When the user enters "Mehmet" on search box
      Then the suggestions on drop down should start with "Mehmet"