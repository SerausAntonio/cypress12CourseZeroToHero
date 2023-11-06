describe("TestSuite-2:",()=>{
    beforeEach("upload the page",()=>{
        cy.viewport('iphone-6')
        
    })
   it("Contact Form",()=>{
      cy.log(Cypress.env())
      cy.visit('/');
      cy.log(cy.url());
   })   

})