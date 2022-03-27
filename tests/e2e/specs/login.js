/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://seniorproj-d8a09.web.app/')
  })
   it('login', () => {
    // https://on.cypress.io/type
    cy.get('button').eq(5)
      .click();
    cy.get('input').first()
      .type('josephpio@oakland.edu').should('have.value', 'josephpio@oakland.edu')
    cy.get('input').last()
      .type('password').should('have.value', 'password')
    cy.get('button').eq(1)
      .click();
  })
 })