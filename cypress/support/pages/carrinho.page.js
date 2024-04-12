/// <reference types="cypress" />

export const carrinhoPage = {

    addproduto(){
        cy.get('[data-testid="search-products"]').click()
        cy.get('[data-testid="Category"]').click()
        cy.get('[data-testid="category-Clothes-button"]').click()
        
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1)').click()
        cy.get('[data-testid="addToCart"]').click()
        
    },

    PreviewCarrinho() {
        //cy.get('[class="css-175oi2r"]').should('contain', 'My Cart')
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1awozwy > [style="color: rgb(255, 255, 255); font-size: 20px; font-family: Montserrat-Bold;"]').should('contain', 'My Cart')
    },

    updateCarrinho() {
        cy.get('[data-testid="addItem"] > .css-146c3p1').click()
        return cy.get('[style="flex-direction: row; margin-top: 10px;"] > :nth-child(1)')
    },

    removeProduto() {
        cy.get('[data-testid="remove"]').click()
        return cy.get('[data-testid="emptyCart"]')
    }
 

    

}