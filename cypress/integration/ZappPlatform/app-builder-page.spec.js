/// <reference types="Cypress" />


context('App families open with login', () => {
    beforeEach(() => {
        cy.login('d.ingber@applicaster.com','Dor7Punk')
    })

    it('Verify app family page', () => {
        //Search for app

        cy.get("li[class='active']").contains('Amit Test')
        cy.location('pathname').should('eq', '/app_families/699');

    })
        
    it('Navigate to app builder', () =>{
        //Press on App builder button 
        cy.get(".btn-toolbar").find('.btn btn-default').should('have.text',"Wildness")

        //Press on Layout
        cy.get('.app-javascript-packages-UiBuilder-components-Modals-RiversConfigurationsIndex-styles__blue-text--3J6sH').then(($btn) => {
            if ($btn.length > 0) {
                $btn.click()
            } else {
                console.log("Can't found Layout button")
            }
        //verify account
        // cy.location('pathname').should('eq','accounts/5ae048ef586d7600081e2b6a/app_families/699/rivers_configurations/a92ef3ab-5c4b-4af5-8ee7-997adbb1416e/rivers');
        // cy.get("a[href*='app_families/699']").eq(0).select('1').should ('have.value', 'Amit Test')

    })
        //Press on the 3 dots:
        // cy.get('.app-javascript-packages-sharedComponents-Dropdown-styles__dropdown--3p-4P app-javascript-packages-sharedComponents-Dropdown-styles__light--3xvCr ').click()

        // //Press on navigation:
        // cy.get('.app-javascript-packages-sharedComponents-TopBar-styles__menu-item--3TKlb').click()

        //Press on App builder button

        cy.get('div[class=".app-javascript-packages-sharedComponents-Button-button-styles__ap_btn--2WLE6 app-javascript-packages-sharedComponents-Button-button-styles__dark--2h06T"]').click({multiple:true})
        // cy.get("div.container:nth-child(2) div.row div.container div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-1p0dtai.rn-deolkf.rn-6koalj.rn-13awgt0.rn-1m1wadx.rn-1awmn5t.rn-eqz5dr.rn-1d2f490.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-12vffkv.rn-u8s1d.rn-zchlnj.rn-ipm5af.rn-1lgpqti div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-13awgt0.rn-1m1wadx.rn-1awmn5t.rn-eqz5dr.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-12vffkv.rn-bnwqim.rn-1lgpqti div.app-javascript-packages-sharedStyles-styles-main__ui-builder--35esE div.app-javascript-packages-UiBuilder-components-Layout-styles__layout-container--3vxae div.app-javascript-packages-UiBuilder-components-Layout-styles__nav-layout--EJs9h:nth-child(2) div.app-javascript-packages-UiBuilder-components-Layout-styles__main-container--2sr-G div.app-javascript-packages-sharedComponents-Canvas-styles__container--3Hl-D div:nth-child(1) div.app-javascript-packages-sharedComponents-Canvas-styles__composer--kwcO1 div.app-javascript-packages-sharedComponents-Canvas-LeftPanel-styles__left-container--TOTb0 span:nth-child(2) > div.app-javascript-packages-sharedComponents-Canvas-LeftPanel-styles__action-item--Gj2Ey").click()
        cy.get('div[class=".app-javascript-packages-sharedComponents-Button-button-styles__ap_btn--2WLE6 app-javascript-packages-sharedComponents-Button-button-styles__dark--2h06T"]')

        //press on General Conetent
        cy.get('.app-javascript-packages-sharedComponents-Gallery-Thumbnail-styles__thumbnail--3d3WJ').click()
        
        //Press on Add screen 
        cy.get('.app-javascript-packages-sharedComponents-Button-button-styles__ap_btn--2WLE6 app-javascript-packages-sharedComponents-Button-button-styles__success--2pqyJ').click()
    
    })
})




