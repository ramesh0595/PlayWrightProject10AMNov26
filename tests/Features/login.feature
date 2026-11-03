@login @E2E
Feature: To validate the login functionallity of the facebook application

Background:
Given The user should be in facebook page

@smoke @regression
Scenario: Login-Invalid To validate the login functionallity with Invalid Credentials

When The user has to fill the username "ramesh@gmail.com" and password "123456789"
And The user has to click login button
Then The user should be navigate the Invalid login page

@sanity @regression
Scenario: Login-Valid To validate the login functionallity with valid Credentials

When The user has to fill the username "mano@gmail.com" and password "5351673"
And The user has to click login button
Then The user should be navigate the Invalid login page

