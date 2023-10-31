///<reference types = "Cypress"/>
describe("Testsuite-1:Contact us form via WebdriverUni",()=>{
    beforeEach("upload the page",()=>{
        //cy.viewport('iphone-6')
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    })
    it("Should have valid text",function(){
        cy.get('.section_header').should("contain.text","CONTACT US")
        cy.get("input.contact_button").should("have.attr","value");
        cy.get("input.contact_button").eq(0).invoke("attr","value").should("eq","RESET");
        cy.get("input.contact_button").eq(1).invoke("attr","value").should("eq", "SUBMIT");
        cy.get("div[id='nav-container']").find(".col-lg-12").should("contain.text","Copyright © www.GianniBruno.com")
    })

    it("All placeholders should be available and fill with right text", function(){
        cy.get('.section_header').should("contain.text","CONTACT US")
        cy.get("input[name='first_name']").invoke("attr","placeholder").should("eq","First Name")
        cy.get("input[name='last_name']").invoke("attr","placeholder").should("eq","Last Name")   
        cy.get("input[name='email']").invoke("attr","placeholder").should("eq","Email Address")
        cy.get("textarea[name='message']").invoke("attr","placeholder").should("eq","Comments")   
    })
    it("Test Contact-Us Form via WebdriverUni",()=>{
        cy.get("input[name='first_name']").type("Peter")
        cy.get("input[name='last_name']").type("Parker");
        cy.get("input[name='email']").type("peter.parker@hotmail.com");
        cy.get("textarea[name='message']").type("Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting.")
        cy.get("input[type='submit']").click();
        cy.get("div#contact_reply > h1").should("have.text","Thank You for your Message!");
    })
    it("Test Contact-Us Form reset WebdriverUni",()=>{
        cy.get("input[name='first_name']").type("Peter")
        cy.get("input[name='last_name']").type("Parker");
        cy.get("textarea[name='message']").type("Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting.")
        cy.get("input[type='submit']").click();
        cy.get('body').contains('Error: all fields are required')
       
    })

})
describe("TestSuite-2:",()=>{
    beforeEach("upload the page",()=>{
       // cy.viewport('iphone-6')
        cy.visit("https://www.automationteststore.com");
    })
   it("Contact Form",()=>{
    
   // cy.get("ul.info_links_footer > li:nth-child(5) > a").should('have.attr','href').and('include','contact')
    cy.get("a[href$='contact']").should('have.attr','href').and('include','contact')
    //cy.get("ul.info_links_footer > li:nth-child(5)").should("have.text","Contact Us").click();
    cy.get("a[href$='contact']").click()
    cy.get("h1.heading1 > .maintext").should("contain.text","Contact Us");
    cy.get("h3.heading3").should("contain.text","Contact Us Form");
    cy.get("#ContactUsFrm_first_name").type("John")
    cy.get("#ContactUsFrm_email").type("John@hotmail.com")
    cy.get("#ContactUsFrm_enquiry").type("Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting.");
    cy.get("button[title='Submit']").click();

    cy.get("div.contentpanel > section").should("contain.text","Your enquiry has been successfully sent to the store owner!")
    cy.get("a.btn.btn-default.mr10").invoke("attr","title").should("eq","Continue")
})
it("Chai Assertions",()=>{
    assert.isNotOk(false, 'this will fail');
    assert.isNotOk(false, 'this will pass')
    assert.notEqual(3, 4, 'these numbers are not equal');
    assert.strictEqual(true, true, 'these booleans are strictly equal');
    expect(2).to.equal(2);
    expect(2).to.not.equal(1); 
    expect('foo').to.be.a('string');
}) 

it("document",()=>{

    cy.document().should('have.property','charset').and('eq','UTF-8')
    cy.title().then(function(item){
        cy.log(item);
    })
    cy.title().should('eq','A place to practice your automation skills!')
   })
})
describe("Inspect Automation Test Store items using chain of commands",()=>{
    beforeEach("",()=>{
        cy.visit("https://www.automationteststore.com/")
        cy.title().then(function(item){
            cy.log(item)
        })

    })
  
    it("Click on the first item using item header",()=>{
        
        cy.title().should("be.eq","A place to practice your automation skills!")
        cy.get("a.logo > img").invoke("attr","src").should("eq","resources/image/18/7a/8.png")
        cy.get('a.prdocutname').invoke("attr","title").should("eq","Skinsheen Bronzer Stick")     
        cy.get('a.prdocutname').contains("Skinsheen Bronzer Stick").click();
        cy.get("h1.productname > span.bgnone").should("have.text","Skinsheen Bronzer Stick")
        cy.get(".cart").click();
        cy.get("#cart_checkout1").invoke("attr","title").should("eq","Checkout")
    
    })
    it.only("using a[href$] to locate elements",()=>{
        cy.get('a[href$="login"]').eq(0).click();
        cy.get('a[href$="forgotten/password"]').click();
        //cy.get('a[href$="loginname"]').click();

    }  
    )

})
