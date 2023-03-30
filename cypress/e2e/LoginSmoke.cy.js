describe('Login tests', () => {
  let data
  before(function () {
    cy.fixture("example").then((reqData) => {
      data = reqData;
    });
  });
  it('Login with valid credentials', () => {
    cy.visit('/')
    cy.typeUsername(data.username[0])
    cy.typePassword(data.password[0])
    cy.clickLoginButton()
    cy.isonDashboard()
    cy.getLogoutButton()
    cy.isLoggedOut()
  })
  it('Login with blank password', () => {
    cy.visit('/')
    cy.typeUsername(data.username[0])
    cy.typePassword(data.password[1])
    cy.clickLoginButton()
    cy.failedLoginMessage()
  })
  it('Login with invalid password', () => {
    cy.visit('/')
    cy.typeUsername(data.username[0])
    cy.typePassword(data.password[2])
    cy.clickLoginButton()
    cy.failedLoginMessage()
  })
})