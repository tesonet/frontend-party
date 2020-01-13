const mockLocalStorage = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    mockLocalStorage[key] = localStorage[key];
  });
});

Cypress.Commands.add("login", () => {
  cy.get(`[data-test-id="Login-Name"]`).type("tesonet");
  cy.get(`[data-test-id="Login-Password"]`).type("partyanimal");
  cy.get(`[data-test-id="Login-Submit"]`).click();
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(mockLocalStorage).forEach(key => {
    localStorage.setItem(key, mockLocalStorage[key]);
  });
});
