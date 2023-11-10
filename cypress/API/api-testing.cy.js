/// <reference types = "cypress"/>
describe("Api - testing Get Request", () => {
    var result;
    var res;
    var titleOfPosts = new Array();
    it("validate status code of the /post api", () => {

        result = cy.request('http://localhost:3000/posts');
        result.its("status").should("equal", 200);

        res = cy.request('http://localhost:3000/posts/1');
        //res.its("statusText").should("equal","OK");

        res.then(function ($item) {
            cy.log(JSON.stringify($item));
        })

    })

    it("Validate /posts api contains the correct key and value", () => {
        cy.request({
            method: 'GET',
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            var body = JSON.parse(JSON.stringify(response.body));
            //  cy.log(body[0].id);
            // cy.log(body[0].title);
            // cy.log(body[0].author);

            expect(body[0]).has.property("id", 1);
            expect(body[0]).has.property("title", "json-server");
            expect(body[0]).has.property("author", "typicode");

            body.forEach(function (element) {
                expect(element).to.have.all.keys("id", "title", "author");
                cy.log("Author: " + element["author"] + " & Title: " + element["title"]);
            });
        });

    })

    it("Create a new post via /posts api", () => {
        cy.request({
            method: 'POST',
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            },
            body: {
                "title": "Retribution",
                "author": "Liam Neeson"
            }
        }).then(response => {
            expect(response.status).to.eq(201);
            var body = JSON.parse(JSON.stringify(response.body));
            cy.log(body)

            body.forEach(function (element) {
                expect(element).to.have.all.keys("id", "title", "author");
                cy.log("Author: " + element["author"] + " & Title: " + element["title"]);
            });

        })

    })
    it("Validate latest post", () => {
        cy.request({
            method: 'GET',
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {

            let body = JSON.parse(JSON.stringify(response.body))

            body.forEach(function (item) {
                // cy.log(item.id)
                cy.log(item.title)
                // cy.log(item.author)
                titleOfPosts.push(item["title"]);

            })
            cy.wrap(body).its('length').should('eq', 6);
        }).then(() => {
            var latestPost = titleOfPosts[titleOfPosts.length - 1]
            expect(latestPost).to.eq("Retribution");
        })


    })

    it("Update an existing post via  the /posts api - PUT", () => {

        cy.request({
            method: 'PUT',
            url: "http://localhost:3000/posts/5",
            headers: {
                accept: "application/json"
            },
            body: {
                "title": "The Marvels",
                "author": "Carol Danvers"
            }
        }).then((response) => {

            expect(response.status).to.eql(200);
        })


    })
    it.only("Delete an existing post via  the /posts api - DELETE", () => {
        cy.request({
            method: 'DELETE',
            url: "http://localhost:3000/posts/6",
            headers: {
                accept: "application/json"
            },

        }).then((response) => {

            expect(response.status).to.eql(200);
        })


    })

})

