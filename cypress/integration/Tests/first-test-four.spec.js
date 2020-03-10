
/// <reference types="Cypress" />

describe('Four Test', () => {
  it("Alets", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  //Alets
  cy.get('#alertbtn').click()
  cy.get('#confirmbtn').click()
  
  //event alerts
  cy.on('window:alert',(str)=>
  {
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
  })

  //event alerts
  cy.on('window:confirm',(str)=>
  {
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
  })
  //Open a new url inside the window
  cy.get('#opentab').invoke('removeAttr','target').click()
  cy.url().should('include','index')
  cy.wait(1000)

  //go 
  cy.go('back')

  //Table verfiy 
  cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }

  //hover 
  cy.get('div.mouse-hover-content').invoke('show')
  cy.contains('Top').click()
  cy.url().should('include','#top')
 
})
  })
})