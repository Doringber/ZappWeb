// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email,password) => {
    cy.visit('https://zapp.applicaster.com/app_families/699')
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })

    cy.location('protocol').should('eq', 'https:')

    // Take a snapshot
    //cy.screenshot('actions/login/Login_page');

    // Fill the username
    cy.get('#user_email')
    .type(email)
    .should('have.value', email)

    // Fill the password
    cy.get('#user_password')
    .type(password)
    .should('have.value', password);

    cy.get("label[for='user_remember_me']").click({ multiple: true },{multiple:true})

    // Take a snapshot
    //cy.screenshot('actions/login/Login_page_with_credentials');

    // Press ok
    cy.get("input[name='commit']").click()


})
Cypress.Server.defaults({
    delay: 500,
    force404: false,
    whitelist: (xhr) => {
      // handle custom logic for whitelisting
      return true;
    }
  })

