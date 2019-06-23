/* eslint-disable no-unused-expressions */
import { apiServerUrl } from '../../src/config';

beforeEach(() => {
    cy.server();

    cy.route('POST', `${apiServerUrl}/tokens`).as('getToken');
    cy.route(`${apiServerUrl}/servers`).as('getServers');
});

describe('Private routes', () => {
    it('Does redirect to /login url for anonumous user', () => {
        cy.visit('/');

        cy.location('pathname').should('eq', '/login');
    });
});

describe('Auth', () => {
    const getTokenFromLocalStorage = win => JSON.parse(win.localStorage.getItem('token'));

    it('Must stay on login screen for bad credentials', () => {
        cy.login('u', 'p');

        cy.wait('@getToken');

        cy.location('pathname').should('eq', '/login');
    });

    it('Must save token after login and clear it after logout', async () => {
        cy.login('tesonet', 'partyanimal');

        cy.wait('@getToken');
        cy.location('pathname').should('eq', '/');

        // Token must be saved in local storage
        cy.window().then(win => expect(getTokenFromLocalStorage(win)).not.eq(null));

        // Click on logout button
        cy.get('[data-test="action/logout"]').click();

        cy.location('pathname').should('eq', '/login');

        // Token must be cleared from local storage
        cy.window().then(win => expect(getTokenFromLocalStorage(win)).eq(null));
    });
});

describe('Show data', () => {
    it('Show server list on home page', () => {
        cy.login('tesonet', 'partyanimal');

        cy.wait('@getServers');

        cy.get('[data-test="serverList"]').should('exist');
    });
});
