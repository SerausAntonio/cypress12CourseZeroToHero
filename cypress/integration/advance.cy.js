/// <reference types ="cypress" />
describe("Alias And Fixtures",()=>{
let data;
before("Before Each tests in suite",()=>{

   cy.fixture('example.json').then(function(data){
        this.data = data;
   })
   cy.fixture('userDetails.json').as("users")

})

it ("Read data fixtures",function(){
    cy.log(this.data.name);
    cy.log(this.data.email);
    cy.log(this.data.body);
    cy.log(this.data.first_name);
    cy.log(this.data.last_name)
})
it("Use alias for fixtures",function(){
    cy.fixture('userDetails.json').as("users")
    cy.get("@users").then(function(user){

        cy.log(user.email)
        cy.log(user.first_name)
        cy.log(user.last_name)
    })
})
it.only("Environment variables",()=>{
    cy.visit(Cypress.env('login_url'),{timeout:100000});
    cy.log(Cypress.env());
    cy.log(Cypress.env('products_url'));
    
})

})