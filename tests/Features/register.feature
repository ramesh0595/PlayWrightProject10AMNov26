@register @E2E
Feature: To validate the registration functionallity of the facebook application

Background:
Given The user should be in facebook page

@regression
Scenario: Invalid-register To validate the registration functionallity

When The user has to click the create new account button
And The user has to fill firstName,LastName and Other Details
And The user has to click the submit button
Then The user should be get successfully registered message

@retest @regression
Scenario: Valid-register To validate the registration functionallity

When The user has to click the create new account button
And The user has to fill firstName,LastName and Other Details
And The user has to click the submit button
Then The user should be get successfully registered message
