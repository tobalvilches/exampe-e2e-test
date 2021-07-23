/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

// USER STORIES

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Display a first post', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[data-cy=add-post-button]').click()


    cy.get('[data-cy=input-title]').type("A new beginning")
    cy.get('[data-cy=input-description]').type("Lorem ipsum dolor sit amet, consectetur ...")

    cy.get('[data-cy=submit-btn]').click()

    cy.wait(500)

    cy.get('[data-cy=go-back-link]').click()

    // test
    cy.contains('A new beginning').should('be.visible') // Assert that el is visible


  })

})
