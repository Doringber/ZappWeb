
/// <reference types="Cypress" />
import HomePage from '../../support/POM/Home-Page'


context('Zapp Login', () => {
    beforeEach(() => {
        cy.login('d.ingber@applicaster.com', 'Dor7Punk')
    })

describe('Zapp Plugin manager', () => {
    it.only('Verify Plugin screen open', () => {
        const homePage=new HomePage()
        homePage.getEdenTest()

        //Open dropdown button
        cy.get('#dropdownActions').first().click()

        cy.get("ul[aria-labelledby='dropdownActions']").find('li').contains(' Plugin configuration').click({force: true})

        //move to plugin page
        // cy.xpath("//*[@id='test-versions']/table/tbody/tr[1]/td[8]/ul/li[2]/ul/li[5]/a").click({ force: true })
        
        //Verify if there plugin to update
        // cy.get('.app-javascript-packages-sharedComponents-Modal-modal-styles__action--3ptDW').find('button')
        // .contains('Apply').then(($update) => {
        //     if ($update.text().includes('Apply')) {
        //         cy.get($update).click()
        //     } else {
        //         console.log('Not able to find the update button')
        //     }
        // })

        
        //Number of plugins 
       cy.get("div.container:nth-child(2) div.row div.container div.app-javascript-packages-sharedStyles-styles-main__ui-builder--35esE div.app-javascript-packages-PluginGallery-components-Layout-styles__layout-container--37d57 div.app-javascript-packages-PluginGallery-components-Layout-styles__nav-layout--DNh4M:nth-child(2) div.app-javascript-packages-PluginGallery-components-Layout-styles__main-container--ShGxz div:nth-child(1) div.app-javascript-packages-sharedComponents-Canvas-styles__composer--kwcO1.app-javascript-packages-sharedComponents-Canvas-styles__white-background--L44vP div.app-javascript-packages-sharedComponents-Canvas-CentralPanel-styles__central-panel-container--froro > div.app-javascript-packages-PluginGallery-components-PluginGallery-styles__plugin-view-container--2Z6jO a")
       .each(($el, index, $list) => {
           cy.log($el.text())
           const text=$el.text()
           if(text.includes("Applicaster"))
           {
               text.then(function(newText)
               {
                cy.writeFile('/Users/doringber/workspace/cypress/projects/ZappWeb/cypress/support/plugin-text/message.txt', newText)

               })

           }
       })


       //Verify plugins update
    //    cy.get('.app-javascript-packages-sharedComponents-TopBar-styles__label-padding--n5H0O > span').should('be.visible')
    
})
})
})
