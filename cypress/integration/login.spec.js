/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Shows error with wrong credentials", () => {
    cy.get(`[data-test-id="Login-Name"]`).type("tess");
    cy.get(`[data-test-id="Login-Password"]`).type("party");
    cy.get(`[data-test-id="Login-Submit"]`).click();
    cy.get(`[data-test-id="Error-Message"]`).should('exist')
  });

  it("Can login", () => {
    cy.login();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Can logout", () => {
    cy.login();
    cy.get(`[data-test-id="Logout-Icon"]`).click();
    cy.url().should("eq", "http://localhost:3000/login");
  });

  it("Redirects from login to main page when token present", () => {
    cy.login();
    cy.visit("http://localhost:3000/login");
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Redirects to Login screen when accessing protected routes", () => {
    cy.visit("localhost:3000").then(() => {
      cy.url().should("eq", "http://localhost:3000/login");
    });
  });
});
