const {
    Before,
    After,
    Given,
    Then
} = require("cypress-cucumber-preprocessor/steps");

const srcUrl = 'https://google.com'

Before(() => {
  
});


Given('I open Google page', () => {
    cy.visit(srcUrl)
});

Then(`I see {string} in the title`, (title) => {
    cy.title()
        .should('include', title)
});

Given('{string} page is opened', (title) => {
    cy.url()
        .should('include', title)
});
  
Then("Type {string} in the search field", (title) => {
    cy.get('input.gLFyf.gsfi')
        .type(title)
        .should('have.value', title)
});

Then("Press enter to find {string} with Google", (title) => {
    cy.get('input.gLFyf.gsfi')
        .type('{enter}')
    
    cy.url()
        .should('include', title)
        
    cy.get('input.gLFyf.gsfi')
        .should('have.value', title)
});


// Home Work Automation 
// WHAT APP 
// сделать массив с данными из таблицы
// через each посчитать их колличество
// проверить содержимое на сходство
// почитать проверки и методы в рамках should и expect