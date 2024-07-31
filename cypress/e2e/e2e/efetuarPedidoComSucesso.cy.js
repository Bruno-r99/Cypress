/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Teste E2E - Realização de pedido com sucesso', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });
    it('Deve efetuar o pedido com sucesso', () => {
        //Informar dados de login
        cy.gui_login('standard_user','secret_sauce')

        //Verifica se está na tela de produtos
        cy.get('.product_label').should('contain', 'Products')

        //seleciona filtro no combo
        cy.get('.product_sort_container').select('Price (low to high)')

        //Valida se realmente reordenou de acordo com o filtro
        cy.get(loc.LISTAGEM_ITENS.PRIMEIRO).should('contain', 'Sauce Labs Onesie')
        cy.get(loc.LISTAGEM_ITENS.SEGUNDO).should('contain', 'Sauce Labs Bike Light')
        cy.get(loc.LISTAGEM_ITENS.TERCEIRO).should('contain', 'Sauce Labs Bolt T-Shirt')

        //Utilizar um command para clicar no primeiro produto e adicionar ao carrinho
        cy.adicionarItemNoCarrinho('Sauce Labs Onesie')
        cy.adicionarItemNoCarrinho('Sauce Labs Bike Light')
        cy.adicionarItemNoCarrinho('Sauce Labs Bolt T-Shirt')

        //Validar os itens do carrinho 
        cy.get('.fa-layers-counter').click()
        cy.get(loc.CARRINHO_ITENS.PRIMEIRO).should('contain', 'Sauce Labs Onesie')
        cy.get(loc.CARRINHO_ITENS.SEGUNDO).should('contain', 'Sauce Labs Bike Light')
        cy.get(loc.CARRINHO_ITENS.TERCEIRO).should('contain', 'Sauce Labs Bolt T-Shirt')

        //Validar página e continuar compra
        cy.get('.btn_action').click()
        cy.get('.subheader').should('contain', 'Checkout: Your Information')

        //utilizar command para inserir dados pessoais e confirmar
        cy.inserirDadosPessoais('Bruno', 'Rodrigues de Almeida', '48547-190')

        cy.get('.btn_primary').click() 
        
        //Validar e finalizar compra 
        cy.get('.subheader').should('contain', 'Checkout: Overview')
        cy.get(loc.CARRINHO_ITENS.PRIMEIRO).should('contain', 'Sauce Labs Onesie')
        cy.get(loc.CARRINHO_ITENS.SEGUNDO).should('contain', 'Sauce Labs Bike Light')
        cy.get(loc.CARRINHO_ITENS.TERCEIRO).should('contain', 'Sauce Labs Bolt T-Shirt')
        cy.get('.btn_action').click()

        //Validar página de conclusão da compra
        cy.get('.subheader').should('contain', 'Finish')
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')

        //Fazer Logout do site
        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click()
    });
}) 