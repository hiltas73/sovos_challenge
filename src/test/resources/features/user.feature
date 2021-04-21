@wip
Feature: User Verification
  Scenario: Verify that user information can be retrieved
    When I get the current user information from api

  Scenario: Verify that system must not permit duplicate users
    When I repost existing user information
    Then status code should be 400

  Scenario: New user should be able to register
    When I post a new user information
    Then status code should be 200

  Scenario Outline: Retrieve registered user information

    When I send get request using <ID>
    Then status code should be <StatusCode>

    Examples:
    |ID|StatusCode|
    |1 |200       |
    |11|404       |
