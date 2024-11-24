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
			
			 //validation pour les objets entiers
            assert.deepEqual(itemsFound, expectedHeader);
        })
})

Then ("version 2, confirm that the column headings are exactly what we expect", (data: DataTable) => {
    const expectedData = data.hashes();

    console.log("  --> expectedData: ", expectedData)
    /* expectedData
            [
                {HEADER: 'Nom', ICON: ''},
                {HEADER: 'Users', ICON: ''},
                {HEADER: 'Items', ICON: 'glyphicon glyphicon-cloud'},
                {HEADER: 'Dates', ICON: ''},
                {HEADER: 'Duration', ICON: ''},
                {HEADER: 'Projects', ICON: ''} 
            ]   

        const index0Name = expectedData[0]['HEADER'];
        const index2Icon = expectedData[2]['ICON'];
        console.log("  ---> index0Name: "+index0Name+"  ---> index2Icon: "+index2Icon)  
        LOG: ---> index0Name: Nom ---> index2Icon: glyphicon glyphicon-cloud
    */

    cy.get('table thead th')
        .should('have.length',6)  
        .then(console.log)
        .then((currentSubject) => {
           

            for (let i = 0; i < currentSubject.length ; i++) {
                // parcurrir les elements JQuery<HTMLElement> et valider le contenu du DataTable
                let expectedHeader: string = expectedData[i]['HEADER'];
                let headerFound: string =  currentSubject[i].innerText

                if (expectedHeader) {
                    expect(expectedHeader).to.equal(headerFound);
                }
                
                // valider l'icône associé au header
                let iconHeader: string = expectedData[i]['ICON'];

                if (iconHeader) {
                    cy.wrap(currentSubject[i].getHTML()).get('i').should('have.class', `${iconHeader}`)
                }
            }

        })
})
