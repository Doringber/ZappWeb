
context('Home page open', () => {
    beforeEach(() => {
            cy.visit('https://zapp.applicaster.com/')
            cy.location('protocol').should('eq', 'https:')
    
            // Take a snapshot
            cy.screenshot('actions/login/Login_page');
    
            // Fill the username
            cy.get('#user_email')
            .type('d.ingber@applicaster.com')
            .should('have.value', 'd.ingber@applicaster.com');
    
            // Fill the password
            cy.get('#user_password')
            .type('Dor7Punk')
            .should('have.value', 'Dor7Punk');

            // remember me button
            cy.get("label[for='user_remember_me']").click({ multiple: true },{multiple:true})
    
            // Take a snapshot
            cy.screenshot('actions/login/Login_page_with_credentials');
    
            // Press ok
            cy.get("input[name='commit']").click()
    
            // Take a snapshot
            // cy.screenshot('actions/login/Home_page');
    
            // Verify the app redirected you to the homepage
            cy.location('pathname', { timeout: 10000 }).should('eq', '/');
    
            // Verify User name display
            cy.contains('Hello Dor').should('be.visible')
      })


    // it('Search app family', () => {
    //     //Search for app
    //     cy.get('#name').type('analytics')
    //     cy.get("input[type='submit']").click({ multiple: true })
    //     cy.wait(8000)
    //     cy.get('.btn btn-default').click({force:true})
        // cy.shadowGet('.btn btn-default')
        //     .invoke('attr', 'href')
        //     .then(href => {
        //     cy.visit(href);
        //     });
        // cy.get("span[class='glyphicon glyphicon-info-sign']").click().parent()

    })

    // it('Press on the first app', () => {
    //     cy.get("a[class='btn btn-default']").click()
    //     // cy.contains('Filter').click()
    //     cy.get("li[class='active']").should('Berliner Morgenpost')
    
    // })
})
