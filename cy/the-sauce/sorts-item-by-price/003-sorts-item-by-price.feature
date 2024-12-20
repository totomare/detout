# https://github.com/bahmutov/taste-the-sauce/blob/lesson03/cypress/e2e/sorted-prices.cy.js
Feature: The Sauce - lesson 03

  Scenario: sorts item by price
    When I open the page The Sauce 
    Then I sorts item by price - version 1
    Then I sorts item by price - version 2