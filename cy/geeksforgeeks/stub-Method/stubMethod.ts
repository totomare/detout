import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Credit https://www.geeksforgeeks.org/cypress-stub-method/

When ("I open the page stubMethod", () => {

    cy.visit('http://localhost:8880/geeksforgeeks/stubMethod.html')
    cy.location('pathname').should('contain','stubMethod.html')
})

Then ("I test stub Method - Basic Usage", () => {
        // Stub the showAlert method
        cy.window().then((win) => {
            cy.stub(win.myBasicApp, 'showAlert').as('showAlertStub');
        });

        // Click the button
        cy.get('#clickMeBasic').click();

        // Assert that showAlert was called
        cy.get('@showAlertStub').should('have.been.called');
})


Then ("I test without stub - Custom Implementation", () => {
    cy.window()
        .its('console')
        .then((console) => {
        cy.spy(console, 'log').as('myLog')
    })

    // Click the button
    cy.get('#clickMeCustom').click();

    cy.get('@myLog')
    .invoke('getCalls')
    .then(console.log)
    /*  [{…}] 
        0: {thisValue: console, args: Array(2), lastArg: 'Hello, World!', callback: undefined, proxy: ƒ, …}
        length: 1  
    */
    .then((calls) => {
        expect(calls.length).to.eq(1)
        expect(calls[0].args).to.deep.eq(['Original message:', 'Hello, World!'])
    })
})

Then ("I test stub Method - Custom Implementation", () => {

        // Stub the logMessage method with custom implementation
        // https://sinonjs.org/releases/v19/stubs/ - stub.callsFake(fakeFunction);
        // callsFake : Replace a method with a function : https://docs.cypress.io/api/commands/stub
        cy.window().then((win) => {
            cy.stub(win.myCustomApp, 'logMessage').callsFake((message) => {
                console.log('Stubbed message:', message);
            }).as('logMessageStub');
        });

        // Click the button
        cy.get('#clickMeCustom').click();

        // Assert that logMessage was called with the correct argument
        cy.get('@logMessageStub')
            .should('have.been.calledWith', 'Hello, World!')
            .should('have.callCount', 1)
            .invoke('getCalls')
            .then((calls) => {
                console.log('  calls: ',calls)                
                expect(calls.length).to.eq(1)
            })    



})
