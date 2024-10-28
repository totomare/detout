// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('confirms the item with the lowest price', () => {
  cy.visit('/')

  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  cy.location('pathname').should('equal', '/inventory.html')

  cy.get(".inventory_list").
    find(".inventory_item").then(($lis) => { 
      expect($lis).to.have.length(6)
      let minPrince = Number.MAX_VALUE;

      let arrayPrice = Cypress._.map($lis, (el) => {
        //cy.log("  --->el: ",el)
        cy.wrap(el).find(".inventory_item_price").then(($inventoryPrice)=> {
           
          //const stringPr = $inventoryPrice.text()
          //const valuePrice = stringPr.substring(stringPr.indexOf('$') + 1)
          //const realPrice = parseFloat(valuePrice);
          let realPrice = parseFloat($inventoryPrice.text().substring($inventoryPrice.text().indexOf('$') + 1));
          if (realPrice < minPrince) {
            minPrince = realPrice
          }
          cy.log("  ---> minPrince: ", minPrince) 
        })
        
      })
      cy.log("  ---> minPrince: ", minPrince)
      //expect(minPrince, ' la prix minimum: ').to.be.equal(7.99)
    })

})
