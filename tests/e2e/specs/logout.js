/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://seniorproj-d8a09.web.app/')
    })
     it('logout', () => {
      // https://on.cypress.io/type
      cy.get('button').last()
        .click();
    })
   })