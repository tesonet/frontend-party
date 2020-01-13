/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Can login", () => {
    cy.get(`[data-test-id="Login-Name"]`).type("tesonet");
    cy.get(`[data-test-id="Login-Password"]`).type("partyanimal");
    cy.get(`[data-test-id="Login-Submit"]`).click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
