/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://seniorproj-d8a09.web.app/sign-in')
  })
  it('Failed Login Attempt #1', () => {
    // https://on.cypress.io/type
    cy.get('input').first()
      .type('test@gmail.com').should('have.value', 'test@gmail.com')
    cy.get('input').last()
      .type('password1').should('have.value', 'password1')
    cy.get('button').eq(7)
      .click();
    cy.wait(6000)
  }),
  it('Failed Login Attempt #2', () => {
    // https://on.cypress.io/type
    cy.get('input').first()
      .type('test@gmail.com').should('have.value', 'test@gmail.com')
    cy.get('input').last()
      .type('password1').should('have.value', 'password1')
    cy.get('button').eq(7)
      .click();
    cy.wait(6000)
  }),
  it('Failed Login Attempt #3', () => {
    // https://on.cypress.io/type
    cy.get('input').first()
      .type('test@gmail.com').should('have.value', 'test@gmail.com')
    cy.get('input').last()
      .type('password1').should('have.value', 'password1')
    cy.get('button').eq(7)
      .click();
    cy.wait(6000)
  }),
  it('Failed Login Attempt #4', () => {
    // https://on.cypress.io/type
    cy.get('input').first()
      .type('test@gmail.com').should('have.value', 'test@gmail.com')
    cy.get('input').last()
      .type('password1').should('have.value', 'password1')
    cy.get('button').eq(7)
      .click();
    cy.wait(6000)
  }),
  it('Failed Login Attempt #5', () => {
    // https://on.cypress.io/type
    cy.get('input').first()
      .type('test@gmail.com').should('have.value', 'test@gmail.com')
    cy.get('input').last()
      .type('password1').should('have.value', 'password1')
    cy.get('button').eq(7)
      .click();
    cy.wait(6000)
  }),
  it('Failed Login Attempt #5', () => {
    // https://on.cypress.io/type
    cy.get('input').first()
      .type('test@gmail.com').should('have.value', 'test@gmail.com')
    cy.get('input').last()
      .type('password1').should('have.value', 'password1')
    cy.get('button').eq(7)
      .click();
    cy.wait(6000)
  }),
   it('login', () => {
    // https://on.cypress.io/type
    cy.get('input').first()
      .type('josephpio@oakland.edu').should('have.value', 'josephpio@oakland.edu')
    cy.get('input').last()
      .type('password').should('have.value', 'password')
    cy.get('button').eq(1)
      .click();
      cy.wait(6000)
  })
 })