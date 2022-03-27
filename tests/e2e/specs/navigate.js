/// <reference types="cypress" />
var x;
x = Math.floor(Math.random() * 100);
context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://seniorproj-d8a09.web.app/')
    })
     it('register', () => {
      // https://on.cypress.io/type
      cy.get('button').eq(2)
        .click().wait(1000);
        cy.get('button').eq(3)
        .click().wait(1000);
        cy.get('button').eq(4)
        .click().wait(1000);
        cy.get('button').eq(5)
        .click().wait(1000);
        cy.get('button').eq(6)
        .click().wait(1000);
        cy.get('button').eq(7)
        .click().wait(1000);
        cy.get('button').eq(1)
        .click().wait(1000);
    })
   })