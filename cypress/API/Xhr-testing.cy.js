/// <reference types="cypress"/>

describe("Xhr - testing XMLHttpRequest", () => {

    it("get request", () => {
        cy.request("https://jsonplaceholder.cypress.io/comments")
            .should((response) => {

                expect(response.status).to.eql(200)
                expect(response.body).to.have.length(500)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            })


    })
    it("Get Request - Comment test", () => {

        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.get('button.network-btn').should('contain.text', 'Get Comment')
        cy.get('button.network-post').should('contain.text', 'Post Comment')
        cy.get('button.network-put').should('contain.text', 'Update Comment')
        cy.get("button.network-btn").click();
        cy.get("div.network-comment").should('contain.text',
            "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium");
    })
})

describe("Network Requests", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/network-requests");
    })
    it.only("get request", () => {

        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1',
        },
            {
                body: {
                    postId: 1,
                    id: 1,
                    name: "test name 123",
                    email: "joe_blogs123@test.com",
                    body: "Hello World"
                }
            }).as('getComment');

        cy.get('button.network-btn').should('contain.text', 'Get Comment')
        cy.get('button.network-btn').click();
        cy.wait("@getComment").its("response.statusCode").should("eq", 200);

        // cy.wait("@getComment").its("response.body").then(resp => {
        //      cy.log (JSON.stringify(resp))
        //  })   

    })


    it("POST request", () => {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments/1',


        }).as('postComment');

        cy.get('button.network-post').should('contain.text', 'Post Comment')
        cy.get('button.network-post').click();
        cy.wait("@postComment").its("response.statusCode").should("eq", 200);

    })

})