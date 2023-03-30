Cypress.Commands.add('typeUsername',(userName) => {
    cy.userName().type(userName)
})

Cypress.Commands.add('typePassword',(password) => {
    cy.password().type(password)
})

Cypress.Commands.add('clickLoginButton',()=>{
    cy.lgnButton().click()
})