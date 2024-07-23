/// <reference types="cypress" />


describe('Validação dos Campos no Formulário de Login e Contato', () =>{

    beforeEach('Acessar tela inicial',()=>{
        cy.visit('/')
        cy.get('h1').should('contain','Bem-vindo ao Teste')
    })

    it('3.1 - Verificar a validação do campo de e-mail no formulário de login',() =>{
       
        const email = 'teste@exemplo.com'
        cy.contains('button','Login').click()
        cy.get('#loginPopup').should('be.visible')
        cy.get('#loginEmail').type(email).should('have.value',email)

    })

    it('3.2 - Verificar a exibição de erro para e-mail inválido no formulário de login',() =>{
       
        const email = 'teste@exemplo';

        cy.contains('button','Login').click()
        cy.get('#loginPopup').should('be.visible')
        cy.get('#loginEmail').type(email)
        cy.get('#emailError').contains('Por favor, insira um endereço de email válido')
        
    })

    it('3.3 - Verificar a validação do campo de telefone no formulário de contato',() =>{
       
        const phone = '123456789';

        cy.contains('button','Formulário').click()
        cy.get('#formPopup').should('be.visible')
        cy.get('#phone').type(phone).should('be.visible').and('have.value',phone)
       
    })

    it('3.4 - Verificar a exibição de erro para números de telefone inválidos no formulário de contato',() =>{
       
        const phone1 = '123';
        const phone2 = '1234567890';
        const phone3 = 'abcdefghi';

        cy.contains('button','Formulário').click()
        cy.get('#formPopup').should('be.visible')
        
        cy.get('#phone').type(phone1)
        cy.get('#phoneError').contains('Número de telefone deve ter exatamente 9 dígitos')

        cy.get('#phone').clear().type(phone2)
        cy.get('#phoneError').contains('Número de telefone deve ter exatamente 9 dígitos')

        cy.get('#phone').clear().type(phone3)
        cy.get('#phoneError').contains('Número de telefone deve conter apenas números')
    
        // Conforme os testes realizados, nenhum cenário acima, retorna a mensagem de erro esperado.
    })

    it('3.5 - Verificar a validação do campo de mensagem (`#message`) no formulário de contato',() =>{
       
        const mensagemCurta = Cypress._.repeat('Olá, tudo bem',10);
        const mensagemLonga = Cypress._.repeat('Olá, mensagem longa',30);

        cy.contains('button','Formulário').click()
        cy.get('#formPopup').should('be.visible')

        cy.get('#message').type(mensagemCurta).should('have.value',mensagemCurta).and('be.visible')

        cy.get('#message').clear().type(mensagemLonga, {delay:0}).should('have.value',mensagemLonga).and('be.visible')
        
        //Id fake, utilizado para capturar a mensagem de erro sugerida.
        cy.get('#messageError').contains('Mensagem não pode exceder 400 caracteres')  
        
         
    })
    
    
})