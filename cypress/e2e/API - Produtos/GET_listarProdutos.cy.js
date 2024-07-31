/// <reference types="cypress" />

describe('Validar busca de produtos', () => {
    it('Deve listar todos os produtos', () => {
        cy.request({
            method: 'GET',
            url:'http://localhost:3000/produtos'
        }).then(Response => {
            expect(Response.status).to.equal(200)
            expect(Response.body).to.have.property('produtos')
            expect(Response.duration).to.be.lessThan(20)
        })
    });
});