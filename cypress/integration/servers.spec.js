/// <reference types="Cypress" />

context("Servers Actions", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.login();
  });

  it("Can sort by name ascending", () => {
    cy.get(`[data-test-id="Sort-Name"]`).click();
    cy.get(`[data-test-id="Main-Row"]`).then(e => {
      const strings = [...e].map(({ children: [{ innerText }] }) => innerText);
      cy.wrap(strings.join()).should("eq", strings.sort().join());
    });
  });

  it("Can sort by name descending", () => {
    cy.get(`[data-test-id="Sort-Name"]`).click();
    cy.get(`[data-test-id="Sort-Name"]`).click();
    cy.get(`[data-test-id="Main-Row"]`).then(e => {
      const strings = [...e].map(({ children: [{ innerText }] }) => innerText);
      cy.wrap(strings.join()).should(
        "eq",
        strings
          .sort()
          .reverse()
          .join()
      );
    });
  });

  it("Can sort by distance ascending", () => {
    cy.get(`[data-test-id="Sort-Distance"]`).click();
    cy.get(`[data-test-id="Main-Row"]`).then(e => {
      const list = [...e].map(({ children: [_, { innerText }] }) =>
        parseInt(innerText)
      );
      cy.wrap(list.join()).should("eq", list.sort((a, b) => a - b).join());
    });
  });

  it("Can sort by distance descending", () => {
    cy.get(`[data-test-id="Sort-Distance"]`).click();
    cy.get(`[data-test-id="Sort-Distance"]`).click();
    cy.get(`[data-test-id="Main-Row"]`).then(e => {
      const list = [...e].map(({ children: [_, { innerText }] }) =>
        parseInt(innerText)
      );
      cy.wrap(list.join()).should("eq", list.sort((a, b) => b - a).join());
    });
  });
});
