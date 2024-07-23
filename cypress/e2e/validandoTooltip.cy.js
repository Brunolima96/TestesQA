/// <reference types="cypress" />


describe('Teste de Exibição de Tooltips', () =>{

    beforeEach('Acessar tela inicial',()=>{
        cy.visit('/')
        cy.get('h1').should('contain','Bem-vindo ao Teste')
    })

    it('2.1 - Verificar se o pop-up de login abre e fecha corretamente',() =>{
       
       
        //cy.get('#my-tooltip').should('be.visible').and('contain', 'This is a tooltip');
        cy.contains('.button','Login')
        .find('.tooltip')
        .invoke('show');
  
      cy.get('.tooltip')
        .contains('Abrir formulário de login')
        .should('be.visible');

        cy.contains('.button','Formulário')
        .find('.tooltip')
        .invoke('show');

        cy.get('.tooltip')
        .contains('Abrir formulário de contato')
        .should('be.visible');

        cy.contains('.button','Mais Info')
        .find('.tooltip')
        .invoke('show');

        cy.get('.tooltip')
        .contains('Abrir mais informações')
        .should('be.visible');

    })

  
})