/// <reference types="cypress" />

const faker = require('faker');

describe('Validar cadastro de produto', () => {
    let token
    let body

    before(() => {
        cy.api_login('fulano@qa.com', 'teste')
            .then(Response => {
                token = Response.body.authorization
            })
    });

    beforeEach(() => {
        cy.construirBodyProduto()
            .then(construido => {
                body = construido
            })
    });

    it('Cadastrar produto', () => {
        cy.POST_cadastrarProduto(body, token)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.message).to.equal('Cadastro realizado com sucesso')
            })
    });

     it.only('Validar cadastro de prduto já existente', () => {
        cy.POST_cadastrarProduto(body,token)
        .then(() =>{
            cy.POST_cadastrarProduto(body,token)
        }).then(response =>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Já existe produto com esse nome')
        })
     });

});