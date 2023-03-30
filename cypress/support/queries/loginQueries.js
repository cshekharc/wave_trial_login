Cypress.Commands.add('isonDashboard',() => {
    cy.url().should('include', '/account/dashboard/')
})

Cypress.Commands.add('isLoggedOut',()=>{
    cy.logOutMessage().should('include.text', 'You have successfully logged out')
})

Cypress.Commands.add('failedLoginMessage',()=>{
    cy.invalidCreds().should('include.text', 'You have entered an incorrect username or password.')
})

Cypress.Commands.add('isCaptchaOn',()=>{
    cy.captcha().should('have.text' , 'For security reasons')
})