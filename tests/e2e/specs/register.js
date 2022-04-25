/// <reference types="cypress" />
var x;
x = Math.floor(Math.random() * 100);
context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://seniorproj-d8a09.web.app/')
    })
     it('register', () => {
      // https://on.cypress.io/type
      cy.pause();
      cy.get('button').eq(6)
        .click();
      cy.get('input').first()
        .type('test' + x + '@gmail.com').should('have.value', 'test' + x + '@gmail.com')
      cy.get('input').last()
        .type('password').should('have.value', 'password')
        cy.pause();
      cy.get('button').eq(1)
        .click();
    })
   })