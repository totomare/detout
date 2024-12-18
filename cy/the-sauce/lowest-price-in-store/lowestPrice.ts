// https://cypress.tips/courses/swag-store/lessons/lesson02
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then ("I confirm the lowest price in the store - version 1", () => {

    cy.get(".inventory_list")   
        .find(".inventory_item .inventory_item_price")
        .then(($listItems) => {
            
            let minPrice = Number.MAX_VALUE;

            let productsPrice: number[] = Cypress._.map($listItems, (el) => {
                const stringPrice = el.innerText;
                const valuePrice = stringPrice.substring(stringPrice.indexOf('$') + 1)
                const realPrice = parseFloat(valuePrice);

                if (realPrice < minPrice) {
                    minPrice = realPrice
                }
                
                return realPrice                
            })  
            console.log("  ---> minPrice: ", minPrice) 
            expect(minPrice).to.equal(7.99)

        })    
})

