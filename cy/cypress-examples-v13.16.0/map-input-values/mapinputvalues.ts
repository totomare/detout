import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Credit https://glebbahmutov.com/cypress-examples/recipes/map-input-values.html

When ("I open the page Map input values", () => {
    cy.visit('http://localhost:8880/mapinputvalues.html')
    cy.location('pathname').should('contain','mapinputvalues.html')
})


Then ("I get the result for Map input values version 2", () => {
    const expectedValues = [
        'Joe',
        'Smith',
        '01-20-1999',
        'male',
        'female',
        '',
        'abc1234',
        'abc1234',
        '',
        'Submit',
      ]

      // We could write the entire extraction code in the should(callback) function to enable retries:
      // Nous pourrions écrire l'intégralité du code d'extraction dans la fonction should(callback) pour permettre les nouvelles tentatives :
    cy.get('#signup-form input').should(($inputs) => {
        const values = Cypress._.map($inputs, (el) => el.value)
        expect(values, 'Valider les valeurs').to.deep.equal(expectedValues)
    }).log
})

Then("I get the result for Map input values version 1", () => {
    const expectedValues = [
        'Joe',
        'Smith',
        '01-20-1999',
        'male',
        'female',
        '',
        'abc1234',
        'abc1234',
        '',
        'Submit',
      ]

      // The above code would fail if the values are set after a delay, since cy.then does not retry
      // Le code ci-dessus échouerait si les valeurs sont définies après un délai, car cy.then ne réessaye pas
      // Doc: Cypress automatically includes lodash and exposes it as Cypress._.  https://docs.cypress.io/api/utilities/_
    cy.get('#signup-form input')
       .then(($inputs) => {
        const values = Cypress._.map($inputs, (el) => el.value)
        //console.log(" --- values: ", values)
        return values
    })
    .then(console.log)
    .should('deep.equal', expectedValues)

})
