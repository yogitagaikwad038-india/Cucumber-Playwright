Feature: Authentication flow

  @auth
  Scenario: User logs in, registers, and continues to the next step
    Given User opens the authentication demo page
    When User logs in with username "standard_user" and password "secret_sauce"
    Then Login should be successful
    When User registers with full name "Test User" email "test@example.com" and password "Test@1234"
    Then Registration should be successful
    When User proceeds to the next step
    Then The next step should be completed
