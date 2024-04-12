/// <reference types="cypress" />

const { email, senha } = require('../../fixtures/data.json')
const { carrinhoPage } = require("../../support/pages/carrinho.page.js");




beforeEach(() => {
    cy.login(email, senha)
    cy.visit('/')
});


describe('Utilize o intercept para simular e validar respostas dadas pela API', () => {


    it('Verifique se o produto foi adicionado corretamente', () => {
        cy.intercept('GET', '**/public/getProducts?limit=10&skip=0', { fixture: 'categories.json' }).as('addproduto')
        carrinhoPage.addproduto()
        carrinhoPage.PreviewCarrinho()

    })

    it.only('Verifique se o produto foi atualizado corretamente', () => {
        cy.intercept('GET', '**/public/getProducts?limit=10&skip=0', { fixture: 'categories.json' }).as('updateproduto')
        carrinhoPage.addproduto()
        carrinhoPage.updateCarrinho()
        carrinhoPage.updateCarrinho().should('be.visible')
    })

    it('Verifique se o produto foi removido corretamente', () => {
        cy.intercept('GET', '**/public/getProducts?limit=10&skip=0', { fixture: 'categories.json' }).as('removeproduto')
        carrinhoPage.addproduto()
        carrinhoPage.removeProduto().should('contain', 'Your cart is empty')
    })

});
