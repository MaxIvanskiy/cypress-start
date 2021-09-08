const {
    Before,
    After,
    Given,
    Then
} = require("cypress-cucumber-preprocessor/steps");

const url = 'https://google.com'
Before(() => {
  
});

Given('I open Google page', () => {
  cy.visit(url)
});

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
});

Given('{string} page is opened', (title) => {
    cy.url().should('include', title)
});
  
Then("Type {string} in the search field", (title) => {
    cy.get('input.gLFyf.gsfi')
        .type(title)
        .should('have.value', title)
});

Then("Press enter to find {string} with Google", (title) => {
    cy.get('input.gLFyf.gsfi')
        .type('{enter}')
    
    cy.url().should('include', title)
    
    cy.get('input.gLFyf.gsfi')
        .should('have.value', title)
    
});
