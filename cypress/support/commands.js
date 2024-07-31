/// <reference types="cypress" />

Cypress.Commands.add('gui_login', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('adicionarItemNoCarrinho', (item) => {
    cy.contains(item).click()
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()

})

Cypress.Commands.add('inserirDadosPessoais', (firtsName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firtsName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="postalCode"]').type(postalCode)
       
})