Cypress.Commands.add('userName',()=>{
    cy.get('#inputEmail')
})

Cypress.Commands.add('password',() => {
    cy.get('#inputPassword')
})

Cypress.Commands.add('lgnButton',()=>{
    cy.get('.login-btn')
})

Cypress.Commands.add('logOutMessage',()=>{
    cy.get('.cbox_messagebox')
})

Cypress.Commands.add('invalidCreds',()=>{
    cy.get('.notification > h1')
})

Cypress.Commands.add('captcha',()=>{
    cy.get('[class="form clearfix"] > h1')
})