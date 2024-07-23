/// <reference types="cypress" />

describe('Teste de Pop-up de Login', () =>{

    beforeEach('Acessar tela inicial',()=>{
        cy.visit('/')
        cy.get('h1').should('contain','Bem-vindo ao Teste')
    })

    it('1.1 - Verificar se o pop-up de login abre e fecha corretamente',() =>{
       
        
        cy.contains('button','Login').click()
        cy.get('#loginPopup').should('be.visible')
        cy.get('#loginPopup .close').click()
        cy.get('#loginPopup').should('not.be.visible')
    })

    it('1.2 - Verificar se o pop-up do formulário de contato abre e fecha corretamente',() =>{
       
        
        cy.contains('button','Formulário').click()
        cy.get('#formPopup').should('be.visible')
        cy.get('#formPopup .close').click()
        cy.get('#formPopup').should('not.be.visible')
    })

    it('1.3 - Verificar se o pop-up de mais informações abre e fecha corretamente',() =>{
       
        
        cy.contains('button','Mais Info').click()
        cy.get('#infoPopup').should('be.visible')
        cy.get('#infoPopup .close').click()
        cy.get('#infoPopup').should('not.be.visible')
    })
})