/// <reference types="cypress" />

describe('API - Teste Funcional de login ', () => {
    it('Efetuar login com sucesso', () => {

        cy.api_login("fulano@qa.com", 'teste')

     .then((Response) =>{
            expect(Response.status).to.equal(200)
            expect(Response.body.message).to.equal('Login realizado com sucesso')
        })
    });
    it('Validar e-mail não cadastrado', () => {
       cy.api_login('fulano@qahue.com', 'teste')
        .then((Response) =>{
            expect(Response.status).to.equal(401)
            expect(Response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });
    it('Validar senha incorreta', () => {
    cy.api_login('fulano@qa.com', 'erro')   
    .then((Response) =>{
            expect(Response.status).to.equal(401)
            expect(Response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });
    it('Validar e-mail invalido', () => {
        cy.api_login('fulacom', 'teste')
       .then((Response) =>{
            expect(Response.status).to.equal(400)
            expect(Response.body.email).to.equal('email deve ser um email válido')
        })
    });
    it('Validar senha em branco', () => {
        cy.api_login('fulano@qa.com', '')
        .then((Response) =>{
            expect(Response.status).to.equal(400)
            expect(Response.body.password).to.equal('password não pode ficar em branco')
        })
    });
});