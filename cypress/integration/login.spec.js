describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('does not work with wrong credentials ', () => {
    cy.url().should('include', '/login')

    const usernameInput = 'no-such-username'
    const passwordInput = 'no-such-password'

    cy.get('input[name="username"]')
      .type(usernameInput)
      .should('have.value', usernameInput)

    cy.get('input[name="password"]')
      .type(passwordInput)
      .should('have.value', passwordInput)

    cy.get('form').submit()

    cy.get('[data-test-id="login-error"]').should('be.visible')

    cy.url().should('contain', '/login')
  })

  it.only('logs in', () => {
    cy.url().should('include', '/login')

    const {username, password} = Cypress.env('user')

    cy.get('input[name="username"]')
      .type(username)
      .should('have.value', username)

    cy.get('input[name="password"]')
      .type(password)
      .should('have.value', password)

    cy.get('form').submit()

    cy.url().should('not.contain', '/login')
  })
})
