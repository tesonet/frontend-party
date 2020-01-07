/// <reference types="cypress" />

describe('Logging In - HTML Web Form', function() {
  // we can use these values to log in
  const username = 'tesonet';
  const password = 'partyanimal';

  context('HTML form submission', function() {
    beforeEach(function() {
      cy.visit('/login');
    });

    it('displays errors on login', function() {
      cy.get('input[name=username]').type('asd');
      cy.get('input[name=password]').type('test');
      cy.get('form').submit();
      cy.get('div')
        .should('be.visible')
        .and('contain', 'Something went wrong...');

      // and still be on the same URL
      cy.url().should('include', '/login');
    });

    it('redirects to / on success and finds km word, from serverList', function() {
      cy.get('input[name=username]').type(username);
      cy.get('input[name=password]').type(password);
      cy.get('form').submit();

      cy.url().should('include', '/');
      cy.get('div').should('contain', 'km');
    });
  });
});
