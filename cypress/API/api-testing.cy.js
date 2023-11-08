/// <reference types = "cypress"/>
describe("Api - testing Get Request",()=>{
    var result;
    var res;
it("validate status code of the /post api",()=>{
  
    result = cy.request('http://localhost:3000/posts');
    result.its("status").should("equal",200);

    res = cy.request('http://localhost:3000/posts/1');
   //res.its("statusText").should("equal","OK");

    res.then(function($item){
        cy.log(JSON.stringify($item));
    })

})

it.only("Validate /posts api contains the correct key and value",()=>{
    cy.request({
            method: 'GET',
             url: "http://localhost:3000/posts",
                headers: {
                    accept: "application/json"
                }
    }).then(response =>{
        var body = JSON.parse(JSON.stringify(response.body));
        cy.log(body[0].id);
        cy.log(body[0].title);
        cy.log(body[0].author);
    });

    

 })

})
