
Feature: Search Functionality

  Background:
    Given the user is on the home page

  Scenario Outline: Verify Result Text
    When the user enters "<keyword>" on the search box
    And the user clicks the search button
    Then the same "<keyword>" should be seen on the result text

    Examples:
      |keyword |
      |Swatch  |
      |PS5     |

    Scenario: Verify Drop-Down Suggestion
      When the user enters "Mehmet" on search box
      Then the suggestions on drop down should start with "Mehmet"