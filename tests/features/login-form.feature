@loginForm
Feature: Login Form Sample
    @loginForm

    Scenario: Login using Dummy Sample Form
        Given I am on Dummy Collection page
        And I click login form navigation
        When I try to login with valid credential
        Then I should be able to login successfully