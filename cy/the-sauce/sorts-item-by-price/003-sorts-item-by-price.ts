  // https://github.com/bahmutov/taste-the-sauce/blob/lesson03/cypress/e2e/sorted-prices.cy.js

  // find the sort dropdown and select the low to high value
  // https://on.cypress.io/select
  // Tip: inspect the HTML markup around the sort element

  // find all price elements and map them to numbers

  // confirm the list of numbers is sorted
  // https://on.cypress.io/should
  // Tip: write a should(callback) function
  // that sorts the list and confirms the passed list and the sorted are the same
import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then ("I sorts item by price - version 1", () => {

    cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

    cy.get('.inventory_list')
      .should('be.visible')
      .find('.inventory_item_price')
      .then(($list) => Cypress._.map($list, 'innerText'))
      .then(console.log)                                        // ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99'] 
      .then((prices) => prices.map((s) => s.slice(1))) 
      .then(console.log)                                        // ['7.99', '9.99', '15.99', '15.99', '29.99', '49.99']
      .then((string) => string.map(Number))
      .then(console.log)                                        // [7.99, 9.99, 15.99, 15.99, 29.99, 49.99]
      .should('be.an', 'array')
      .then((list) => {
        // confirm the list is sorted by sorting it using Lodash        
        const sorted = Cypress._.sortBy(list)

        // and comparing the original and sorted lists
        expect(sorted, 'sorted prices').to.deep.equal(list)
      }) 
     
})

Then ("I sorts item by price - version 2", () => {
    

    cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

    cy.get('.inventory_list')
      .should('be.visible')
      .find('.inventory_item_price')
      // we could avoid using individual .then commands and just extract the prices in a single callback.
      .then(($listPrices) => {

        const prices = Cypress._.map($listPrices, (htmlElement) => {
            return htmlElement.innerText
        })
        .map((str) => str.slice(1))
        .map(Number)

        //expect(prices).be.an.array
        console.log('  ---> prices: ', prices)                  // ---> prices: (6) [7.99, 9.99, 15.99, 15.99, 29.99, 49.99]

        // Try to use 3rd party Chai assertions, chai-sorted : https://www.npmjs.com/package/chai-sorted
        // https://stackoverflow.com/questions/72564873/in-cypress-10-how-can-we-check-whether-elements-in-drop-down-are-sorted-alphabe
        // ERROR : Property 'sorted' does not exist on type 'Assertion'.ts(2339)
        // expect(list).to.be.sorted()
        
        // By default, the sort method sorts elements alphabetically. To sort numerically just add a new method which handles numeric sorts
        let numArray = prices.sort(function (a, b) {  return a - b;  });        
        console.log('  ---> prices sort: ',numArray)              // ---> prices sort:  (6) [7.99, 9.99, 15.99, 15.99, 29.99, 49.99]

        // comparing the original and sorted lists
        expect(prices).to.have.ordered.members(numArray)
      }) 
})