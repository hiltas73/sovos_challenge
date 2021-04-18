
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

  @wip
  Scenario Outline:
    When the user start typing any "<chars>" in text box
    And drop down suggestions should appear
    Then the suggested words should start with the same "<chars>"

    Examples:
      |chars  |
      |P      |
      |PS     |
