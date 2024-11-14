import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

// Credit https://glebbahmutov.com/cypress-examples/recipes/table-column-order.html

When ("I open the page Table column order", () => {
    cy.visit('http://localhost:8880/glebbahmutov/tablecolumnorder.html')
    cy.location('pathname').should('contain','tablecolumnorder.html')
})

Then ("confirm that the column headings are exactly what we expect", (data: DataTable) => {
    const expectedData = data.hashes();
    const no0Name = expectedData[0]['HEADER'];
    const no0Icon = expectedData[2]['ICON'];
    console.log("  ---> no0Name: "+no0Name+"  no0Icon: "+no0Icon) 

    //let expectedHeader: string[] = []
    let expectedHeader = {};

    for (var i in expectedData) {
        //console.log(i + ': ' + expectedData[i]['HEADER']);
        expectedHeader[i] = expectedData[i]['HEADER'];
    }
    console.log("   --->expectedHeader: "+expectedHeader[0])

    let itemsFound = {};

    cy.get('table thead th')
        .should('have.length',6)  
        .then(console.log)
        .then((currentSubject) => {
            //console.log("  element : "+ currentSubject[1].innerText)

            let itemsFound = {};

            for (let i = 0; i < 6 ; i++) {
                let texte = currentSubject[i].innerText;
                //console.log("  item: "+ texte);
                if (texte) {
                    itemsFound[i] = texte
                }                    
            }
            //console.log("   --->itemsFound: "+itemsFound[0])

            let expectedHeader = {};

            for (var i in expectedData) {
                //console.log(i + ': ' + expectedData[i]['HEADER']);
                expectedHeader[i] = expectedData[i]['HEADER'];
            }

            for (var i in itemsFound) {
                expect(itemsFound[i]).to.equal(expectedHeader[i]);
            }
        })
})
