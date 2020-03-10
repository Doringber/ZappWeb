
/// <reference types="Cypress" />

  describe('Second Test', () => {
    it("for each", () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      //Verify the right URL
      cy.location('pathname').should('eq', '/seleniumPractise/');
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)

      cy.get('.products').as('produceloctor')
      cy.get('@produceloctor').find('.product').each(($el, index, $list) =>{

      const textVeg = $el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      {
        $el.find('button').click()
      }
    })

      cy.get('.cart-icon').find('img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
      




    })
  })


  
