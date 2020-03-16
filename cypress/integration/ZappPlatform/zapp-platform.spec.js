
/// <reference types="Cypress" />

import HomePage from '../../support/POM/Home-Page'
import VersionPage from '../../support/POM/Version-Page'


context('Zapp Login', () => {
  beforeEach(() => {
    cy.login('d.ingber@applicaster.com', 'Dor7Punk')
  })

  describe('Zapp Search', () => {
    it("Verify search account", () => {

      //Verify the right URL
      cy.location('pathname').should('eq', '/');
      const homePage=new HomePage()


      //Verify the 3 buttons on the top of the screen
      homePage.getNameAccount().should('be.visible')
      homePage.getDropDownApp().should('be.visible')
      homePage.getFilterAccountButton().should('be.visible')
      homePage.getAllAppsOnScreen().should('have.length',30)

      //verify search for account
      homePage.getNameAccount().type("analytics")
      homePage.getFilterAccountButton().click({multiple:true})
      homePage.getResultSearchApp().should('be.visible')

    })
  })

  describe('Zapp Page', () => {
    it("Verify the header buttons", () => {
      const homePage=new HomePage()

      cy.visit(Cypress.env('url') + 'app_families/1116')

      //Verify the right URL
      cy.location('pathname').should('eq', '/app_families/1116');

      //Verify the 4 buttons on the top of the screen
      homePage.getAppBuilderButtons().then(function(elemnet)
      {
        const actuelText = elemnet.text()
        expect(actuelText.includes('App Builder')).to.be.true
      })

      homePage.getAppBuilderButtons().then(function(elemnet)
      {
        const actuelText = elemnet.text()
        expect(actuelText.includes('Edit App')).to.be.true
      })

      homePage.getAppBuilderShare().then(function(elemnet)
      {
        const actuelText = elemnet.text()
        expect(actuelText.includes('Share')).to.be.true
      })

      cy.get("a").contains('New Version')

    })
  })

  describe('Zapp versions', () => {
    it('Verify the app versions', () => {
      const homePage=new HomePage()
      const versionPage=new VersionPage()

      cy.visit(Cypress.env('url') + 'app_families/1116')
      cy.location('pathname').should('eq', '/app_families/1116');

      versionPage.getTestVersionHeader().should('be.visible')
      versionPage.getTestVersionTable().find('tr').should('have.length', 9)
      // cy.get('table[class="table table-hover table-striped middle-vertical-aligned"]').find('tr').each(($e1, index, $list) => {

      //   const text=$e1.text()
      //   if(text.includes('Cms Test'))
      //   {
      //     console.log(text)
      //   }
       
      // })

      versionPage.getPlatfromIcon().first().should('have.attr', 'src', '/assets/platform_icons/android-fea1877955a479d77dca364b220abf1d4ec050845af393dc935102f04e8a33cd.svg')
      versionPage.getVersionID().first().should('have.text','1.5')
      versionPage.getBuildFail().should("be.enabled")
      versionPage.getBuildSucssed().first().should("be.visible")
    })
  })
  
  describe('Zapp features', () => {
    it('Verify the version features', () => {
      const homePage=new HomePage()
      cy.visit(Cypress.env('url') + 'app_families/1116')

      // Click downoload button
      homePage.getDownloadVersion().first().click()
      //Dropdown visable of download button  
      homePage.getDownloadDropDown().should('be.visible')
      // Click info version button 
      homePage.getInfoButton().first().click()
      // Verfiy the dropdown visable 
      homePage.getInfoButton().first().should('be.visible')
      //Press on green button 
      homePage.getBuildVersionButton().should('be.visible').first().click({ force: true })
      // Press on the cencel button
      homePage.getBuildVersionCancelButton().contains(' Close').click()

    })
  })

  describe('Zapp features', () => {
    it('Verify the QR and Download version', () => {
      const homePage=new HomePage()

      cy.visit(Cypress.env('url') + 'app_families/1116')

      // Click downoload button
      homePage.getDownloadVersion().first().click()
      //Dropdown visable of download button  
      homePage.getDownloadDropDown().should('be.visible')
      homePage.getDownloadDropDown().contains('Debug Version').click()
      homePage.getDownloadQR().should('be.visible')
      cy.wait(2000)
      //Verify the download button
      cy.get('a').contains('Download Build')
      .should('have.attr','href')
      cy.get('a').contains('Download Build').should('not.be.disabled')

    })
  })
})


