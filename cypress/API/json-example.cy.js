///<reference types="cypress" />
describe("JSON Object Examples",()=>{

   it("Json Object Examples",()=>{

        const exampleObject = {"key": "Tim", "keys": "Jones"}
        cy.log(exampleObject.key);
        cy.log(exampleObject.keys);
        cy.log(exampleObject["key"]);
        cy.log(exampleObject["keys"]);

        const exampleArrayOfValues= ["Sophie","Rose","Howard"];
       cy.log("-------")
        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[1]);
        cy.log(exampleArrayOfValues[2]);

        const users = {
            "firstname": "Jones",
            "lastname": "Blogs",
            "Age": 30,
            "Students": 
              [ 
                {
                    "firstname": "Jim",
                    "lastname": "Blogs",
                },
                {
                   "firstname": "Sarah",
                   "lastname": "Parker",

                }  
            ],

       }

       cy.log("---------------")
       cy.log(users.firstname);
       cy.log(users.lastname);
       cy.log(users.Age);
       cy.log(users.Students[0].firstname);
       cy.log(users.Students[1].lastname);


   })


}
)