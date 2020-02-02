describe('Servers', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '/v1/servers', 'fixture:servers')
  })

  it('shows server list ordered by distance', () => {
    cy.login()

    const serverListSelector = '[data-test-id="servers-list-item"]'

    cy.get(serverListSelector)
      .should('have.length', 30)
      .then(serverList => {
        const distanceItems = serverList.map((index, item) => {
          return Number(
            Cypress.$(item)
              .children()
              .last()
              .text(),
          )
        })

        const distances = distanceItems.get()
        const sortedDistances = [...distances].sort((a, b) => a - b)

        expect(distances).to.deep.eq(sortedDistances)
      })
  })

  it('orders list by clicking on list header', () => {
    cy.login()

    const serverListSelector = '[data-test-id="servers-list-item"]'
    const headerNameSelector = '[data-test-id="server-list-header-name"]'

    const getNameItemText = (index, item) => {
      return Cypress.$(item)
        .children()
        .first()
        .text()
    }

    cy.get(serverListSelector).then(serverList => {
      const nameItems = serverList.map(getNameItemText)

      const sortedNames = [...nameItems].sort()

      cy.get(headerNameSelector).click()

      cy.get(serverListSelector).then(sortedServerList => {
        const sortedNameItems = sortedServerList.map(getNameItemText)

        expect(sortedNameItems.get()).to.deep.eq(sortedNames)
      })
    })
  })

  it('shows error message when server errors', () => {
    const errorMessage = 'Unauthorized'
    const buttonText = 'Reload list'

    cy.route({
      method: 'GET',
      url: '/v1/servers',
      status: 401,
      response: {
        message: errorMessage,
      },
    })

    cy.login()

    cy.contains(errorMessage).should('be.visible')
    cy.contains(buttonText).should('be.visible')
  })
})
