
/// <reference types="Cypress" />


context('Zapp Login', () => {
  beforeEach(() => {
    cy.login('d.ingber@applicaster.com', 'Dor7Punk')
  })

  describe('Zapp Page', () => {
    it("Verify the header buttons", () => {
      cy.visit('https://zapp.applicaster.com/app_families/699')

      //Verify the right URL
      cy.location('pathname').should('eq', '/app_families/699');

      //Verify the 4 buttons on the top of the screen
      cy.get('.btn-toolbar').contains('App Builder')
      cy.get('.btn-toolbar').contains('Edit App')
      cy.get('.btn-group').contains('Share')
      cy.get("a").contains('New Version')
    })
  })
  describe('Zapp versions', () => {
    it.only('Verify the app versions', () => {
      //test versions
      cy.get('#test-versions').should('be.visible')
      //version table
      cy.get('table[class="table table-hover table-striped middle-vertical-aligned"]').find('tr').should('have.length', 11)
      // cy.get('table[class="table table-hover table-striped middle-vertical-aligned"]').find('tr').each(($e1, index, $list) => {

      //   const text=$e1.text()
      //   if(text.includes('Cms Test'))
      //   {
      //     console.log(text)
      //   }
       
      // })
      // Verify version of app
      cy.get('a[data-title="Version ID"]').first().should('have.text','3.3-dev')

      // Display the build fail button
      cy.get('a[data-title="Build failed"]').should("be.enabled")
      // Verify build button is not None
      cy.get('i[class="fa fa-check-circle green"]').first()
    })
  })
  describe('Zapp features', () => {
    it('Verify the version features', () => {
      // Click downoload button
      cy.get('button[class="btn btn-default dropdown-toggle"]').first().click()
      //Dropdown visable of download button  
      cy.get('ul[class="dropdown-menu dropdown-menu-right"]').should('be.visible')
      // Click info version button 
      cy.get('#dropdownActions').first().click()
      // Verfiy the dropdown visable 
      cy.get('#dropdownActions').first().should('be.visible')
      //Press on green button 
      cy.get('a[class="btn btn-success build-version"]').should('be.visible').first().click({ force: true })
      // Press on the cencel button
      cy.get('button[class="btn btn-default"]').contains(' Close').click()

    })
  })
})


