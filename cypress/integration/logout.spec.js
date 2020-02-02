import {name} from '../../package.json'

describe('Logout', () => {
  beforeEach(() => {
    cy.login()
  })

  it('logs out user', () => {
    cy.contains('Logout').click()

    cy.url()
      .should('include', '/login')
      .then(() => cy.get('form').should('be.visible'))
      .then(() => {
        const state = JSON.parse(localStorage.getItem(`${name}.state`))

        expect(state).to.deep.eq({
          auth: {
            userToken: null,
          },
        })
      })
  })
})
