Feature: Login

    Login functinality validation

@smoke @login
Scenario: Verify login with valid credentails

Given User opens the application
When User enters credentails
Then User should login successfully

@smoke
Scenario Outline: Login with multiple users
Given User opens the application
When User enters "<username>" and "<password>"
Then User should view the error message
Examples:

| username                  | password      |
| standard_user             | secret_sauce  |
| problem_user              | secret_sauce  |
| performance_glitch_user   | secret_sauce  |
| error_user                | secret_sauce  |
| visual_user               | secret_sauce  |


