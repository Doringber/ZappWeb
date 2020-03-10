
/// <reference types="Cypress" />

  describe('First Test', () => {
    it("for each", () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      //Verify the right URL
      cy.location('pathname').should('eq', '/seleniumPractise/');

      cy.get('.search-keyword').type('ca')

      cy.wait(2000)
      cy.get('.product:visible').should('have.length', 4)

      cy.get('.products').as('produceloctor')
      cy.get('@produceloctor').find('.product').should('have.length', 4)

      cy.get('@produceloctor').find('.product').eq(2).contains("ADD TO CART").click()

      cy.get('@produceloctor').find('.product').each(($el, index, $list) =>{

      const textVeg = $el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      {
        $el.find('button').click()
      }
    })
      cy.get('.brand').should('have.text','GREENKART')

      cy.get('.brand').then(function(logoelement)
      {
        cy.log(logoelement.text())
      })


    })
  })


  
