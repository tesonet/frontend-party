import {name} from '../../package.json'

const apiUrl = Cypress.env('apiUrl')

Cypress.Commands.add('login', () => {
  const token = '123'

  const state = {
    auth: {
      userToken: token,
    },
  }

  localStorage.setItem(`${name}.state`, JSON.stringify(state))

  cy.visit('/')
})

// flaky
Cypress.Commands.add('getLoginToken', (user = Cypress.env('user')) => {
  return cy
    .request(
      'POST',
      `${apiUrl}tokens`,
      Cypress._.pick(user, ['username', 'password']),
    )
    .its('body.token')
    .should('exist')
})
