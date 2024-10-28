import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Credit https://glebbahmutov.com/cypress-examples/recipes/compare-lists.html

When ("I open the page Compare two lists", () => {
    cy.visit('http://localhost:8880/comparetwolists.html')
    cy.location('pathname').should('contain','comparetwolists.html')
})


Then ("I confirm that these two lists have identical items", () => {
    cy.get('#first li')      
      .then((arrayFirstList) => {
                const firstHtmlElementList = Cypress._.map (arrayFirstList, (htmlElement) => {
                    return htmlElement.innerText
                })
                console.log(' --> firstHtmlElementList',firstHtmlElementList)
                
            cy.get('#second li')
              .then((arraySecondList) => Cypress._.map(arraySecondList, (htmlElement) => {
                        return htmlElement.innerText
                    }))
              .then(console.log)
              .should('deep.equal', firstHtmlElementList)
       })
 })

