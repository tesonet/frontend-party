function testLogin() {
    cy.visit('http://localhost:3000')
    cy.get('[name="username"]').type('tesonet')
    cy.get('[name="password"]').type('partyanimal')
    cy.contains('Log in').click().should(()=>{
        expect(localStorage.getItem('token')).to.not.null
    })
    cy.url().should('include', '/home')
}

function testTableContent() {
    cy.get('.MuiTableBody-root .MuiTableRow-root').should('have.length', 30)
}

function testAscendingDistanceSorting() {
    cy.contains('Distance').click();
    let oldValue1 = 0;
    cy.get('.MuiTableBody-root .MuiTableRow-root .MuiTableCell-alignRight').each(element=>{
        const newValue = parseInt(element.text())
        if (oldValue1 > newValue){
            assert(false)
        }
        oldValue1 = newValue
    });
}

function testDescendingDistanceSorting(){
    cy.get('.MuiTableCell-alignRight .MuiButtonBase-root').click()
    let oldValue2 = 999999
    cy.get('.MuiTableBody-root .MuiTableRow-root .MuiTableCell-alignRight').each(element=>{
        const newValue = parseInt(element.text())
        if (oldValue2 < newValue){
            assert(false)
        }
        oldValue2 = newValue
    });
}

function testRouting(){
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/random')
}

function testLogout(){
    cy.get('#logout').click().should(()=>{
        expect(localStorage.getItem('token')).to.be.null
    })
    cy.contains('Log in')

    cy.visit('http://localhost:3000/home')
    cy.contains('Log in')
}

describe('Test Login', function() {
    it('Happy flow', function() {
        testLogin()
        testTableContent()
        testAscendingDistanceSorting()
        testDescendingDistanceSorting()
        testRouting()
        testLogout()
    })

    it('Failed login with error message', function() {
        cy.visit('http://localhost:3000')

        cy.get('[name="username"]').type('tesonet1')
        cy.get('[name="password"]').type('partyanimal1')

        cy.contains('Log in').click()

        cy.contains('Incorrect username or password')

        cy.url().should('include', '/')
    })
})