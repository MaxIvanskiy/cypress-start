const {
    Before,
    After,
    Given,
    Then
} = require("cypress-cucumber-preprocessor/steps");

const srcUrl = 'https://google.com';
const search = 'cypress.io';

Before(() => {
  
});

// Scenario: Opening a search engine page
Given('I open Google page', () => {
    cy.visit(srcUrl)
});

Then(`I see 'Google' in the title`, () => {
    cy.title()
        .should('include', 'Google')
});


// Scenario: Find 'cypress.io' with google
Given('Google page is opened', () => {
    cy.title()
        .should('include', 'Google')
});
When("I type 'cypress.io' in the search field", () => {
    cy.get('input.gLFyf.gsfi')
        .type(search)
        .should('have.value', search)
});

And("I Press enter to find 'cypress.io' with Google", () => {
    cy.get('input.gLFyf.gsfi')
        .type('{enter}')
});
Then ("I see search results page", () => {
    cy.url()
        .should('contain', search)
})
And ("I see 'cypress.io' in search field", () => {
    cy.get('input.gLFyf')
        .should('have.value', search)
})

// Scenario: Count search results and check it
Given ("Google page is open with 'cypress.io' search results", () => {
    cy.title()
        .should('include', 'Google')
    cy.get('input.gLFyf')
        .should('have.value', search)
})
Then ("I count search results", () => {
    cy.get('h3.LC20lb.DKV0Md')
        .its('length')
        // .should('have.length', 8)
})
And ("I check if all results have 'cypress' text", () => {
    let intxtAr = [];
    cy.get('h3.LC20lb.DKV0Md')
        .each((element) => {            
            const intxt = (Cypress.$.makeArray(element).map((el) => el.innerHTML));
            const intxtLower = intxt[0].toLowerCase();
            intxtAr.push(intxtLower);
        }).then(() => {
            cy.wrap(intxtAr).each(($el) => {
                cy.wrap($el).should('include', 'cypress');
            })
        })
})