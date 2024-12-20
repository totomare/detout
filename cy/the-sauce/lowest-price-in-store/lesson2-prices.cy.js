// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('confirms the item with the lowest price', () => {
  cy.visit('/')

  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  cy.location('pathname').should('equal', '/inventory.html')

  // find the smallest price number using Cypress._.min
  // and confirm it is 7.99
  cy.get(".inventory_list")
    .should('be.visible')
    .find(".inventory_item_price")
    .should('have.length.greaterThan', 3)
    .then((listePrice) => Cypress._.map(listePrice, (htmlElement) => {
      return htmlElement.innerText
    }))
    .then(console.log)
    .then(listePrice => Cypress._.map(listePrice, (htmlElement) => {
      return htmlElement.substring(htmlElement.indexOf('$') + 1)
    }))
    .then(console.log)
    .then((listePrice) => Cypress._.map(listePrice, (htmlElement) => {
      return parseFloat(htmlElement)
    }))
    .then(console.log)
    .then((listePrice) => Cypress._.min(listePrice))
    .then(console.log)
    .should('equal', 7.99)
})
