// https://cypress.tips/courses/swag-store/lessons/lesson02
// https://github.com/bahmutov/taste-the-sauce/blob/lesson03/cypress/e2e/sorted-prices.cy.js
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then ("I confirm the lowest price in the store {float} - version 1", (smallestPrice) => {

    cy.get(".inventory_list")   
        .find(".inventory_item .inventory_item_price")
        .then(($listItems) => {
            
            let minPrice = Number.MAX_VALUE;

            let productsPrice: number[] = Cypress._.map($listItems, (el) => {
                // from each price element, get its inner text. Ex: $7.99
                const stringPrice = el.innerText;
                
                // each price string has "$" character in front. Remove it using string "substr" method
                const valuePrice = stringPrice.substring(stringPrice.indexOf('$') + 1)

                // convert each price string into a Number
                const realPrice = parseFloat(valuePrice);

                if (realPrice < minPrice) {
                    minPrice = realPrice
                }
                
                return realPrice                
            })  
            console.log("  ---> minPrice: ", minPrice) 
            expect(minPrice).to.equal(smallestPrice)

        })    
})