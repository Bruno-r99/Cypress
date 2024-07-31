/// <reference types="cypress"/>

describe('Teste funcional de login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });

    it('Deve efetuar o login com sucesso', () => {
    cy.gui_login('standard_user','secret_sauce')

    cy.get('.product_label').should('contain', 'Products')
    });

    it('Deve validar usuário incorreto', () => {
         cy.gui_login('incorreto','secret_sauce')
       
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        });

        it('Deve validar senha incorreta', () => {
            cy.gui_login('standard_user','Incorreto')
           
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            });

});