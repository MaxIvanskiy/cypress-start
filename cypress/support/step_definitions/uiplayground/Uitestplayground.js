const {
    Before,
    After,
    Given,
    Then,
    When
} = require("cypress-cucumber-preprocessor/steps");

// Scenario: Dynamic ID
Given('Opening page with dynamic id', () => {
    cy.visit('http://uitestingplayground.com/dynamicid');
    cy.title().should('include', 'Dynamic ID');
})
Then('I get button with dynamic ID', () => {
    cy.get('button')
        .contains('Button with Dynamic ID')
        .click();
})





// Scenario: Class Atribute
Given('Opening page with class attr', () => {
    cy.visit('http://uitestingplayground.com/classattr');
    cy.title().should('include', 'Class Attribute');
})
Then('I click button with btn-primary Class', () => {
    cy.get('button.btn-primary')
        .click();
})






// Scenario: Click
Given('Opening page with click testing', () => {
    cy.visit('http://uitestingplayground.com/click');
    cy.title().should('include', 'Click');
})
When('I click the button', () => {
    cy.get('button')
        .contains('Button That Ignores DOM Click Event')
        .should('have.css', 'background-color', 'rgb(0, 123, 255)')
        .should('have.class', 'btn-primary')
        .and('not.have.class', 'btn-success')
        .click()
})
Then('Button should have class btn-success', () => {
    cy.get('button')
        .contains('Button That Ignores DOM Click Event')
        .should('have.class', 'btn-success')
        .and('not.have.class', 'btn-primary')
})
And ('Button should have green background-color', () => {
    cy.get('button')
        .contains('Button That Ignores DOM Click Event')
        .should('have.css', 'background-color', 'rgb(40, 167, 69)')
})






// Scenario: Hidden layers
Given ('Opening page with hidden layers test', () => {
    cy.visit('http://uitestingplayground.com/hiddenlayers')
})
When ('I click green button', () => {
    cy.get('button#greenButton')
        .should('have.id', 'greenButton')
        .click()
    cy.get('button#greenButton')
        .should('be.visible')
})
Then ('Blue button is displayed', () => {
    cy.get('button#blueButton')
        .should('have.id', 'blueButton')
        .click()
})
And ('Green button is under Blue button by z-index', () => {
    // cy.get('button#greenButton')
    //     .parent('.spa-view')
    //     .should('have.css', 'z-index', '1')

    // cy.get('button#blueButton')
    //     .parent('.spa-view')
    //     .should('have.css', 'z-index', '2')

        cy.get('.spa-view').each(el => {
            
        })
})






// Scenario: Load delay
Given ('Opening main page of uitestingplayground.com', () => {
    cy.visit('http://uitestingplayground.com/')
})
When ('I click Load Delays link', () => {
    cy.get('a[href="/loaddelay"]')
        .click()
})
Then ('I wait The load delays page is loaded', () => {
    cy.location('pathname', {timeout: 5000})
        .should('include', '/loaddelay');

    cy.get('button.btn-primary')
        .contains('Button Appearing After Delay')
        .should('be.visible')
        .click()
    
    // cy.get('button.btn-primary', {
    //     timeout: 5000
    // }).contains('Button Appearing After Delay')
    //     .should('be.visible')
    //     .click()

    
})





// Scenario: Scrollbars
Given ('Opening page with Scrollbars test',  () => {
    cy.visit('http://uitestingplayground.com/scrollbars')
})
Then ('I find a button in the scroll view',  () => {
    cy.get('button#hidingButton')
        .scrollIntoView()
        .should('have.class', 'btn-primary')
        .click()
})









// Scenario: Progress Bar
Given('Opening page with Progress Bar test', () => {
    cy.visit('http://uitestingplayground.com/progressbar')
})
When ('I click Start button', () => {
    cy.get('button#startButton')
        .click()
})
And ('I click Stop button when Progress bar value is equal to 45%', () => {
    cy.contains('div#progressBar', '45%', { timeout: 60000})
        .then(() => {
            cy.get('button#stopButton')
                .click()
        })
})
And('I check the Progress Bar value', () => {
    cy.contains('div#progressBar', '45%')
})












// Scenario: Mouse Over
Given('Opening page with Mouse Over test', () => {
    cy.visit('http://uitestingplayground.com/mouseover')
})
When('I click the Click me link', () => {
    cy.contains('span#clickCount', 0)

    cy.contains('Click me').click()
    cy.contains('Click me').click()

    // cy.get('a.text-primary')
    //     .click()

    // cy.get('a.text-warning')
    //     .click()
})
Then('Counter text is changed to 2', () => {
    cy.contains('span#clickCount', 2)
})


// RERUN

// export const hoverOverElement = (element) => {
//     cy.get(element)
//       .trigger('mouseover')
//       .wait(250);  // time for browser to display tooltip
//   };











// Scenario: AJAX Data
Given ('Opening page with AJAX Data test', () => {
    cy.visit('http://uitestingplayground.com/ajax')
})
When ('I click blue button', () => {
    cy.intercept('/ajaxdata').as('ajaxdata')
    cy.get('button#ajaxButton')
        .click()
})
And ('I wait for the data loaded', () => {
    cy.wait('@ajaxdata')
})
Then ('I check loaded text', () => {
    cy.contains('p.bg-success', 'Data loaded with AJAX get request.')
})
















// Scenario: Client side delay
Given ('Opening page with Client Side Delay test', () => {
    cy.visit('http://uitestingplayground.com/clientdelay')
})
When ('I click button', () => {
    cy.get('button#ajaxButton')
        .click()
})
Then ('I wait for content load', () => {
    cy.get('p.bg-success', { timeout: 60000 })
        .contains('Data calculated on the client side.')
})










// Scenario: Text input
Given ('Opening page with Text input test', () => {
    cy.visit('http://uitestingplayground.com/textinput')
})
When ('I input test in the input field', () => {
    cy.get('input#newButtonName')
        .type('change button name')
        .should('have.value', 'change button name')
})
And ('I press the button', () => {
    cy.get('button#updatingButton')
        .should('have.text', "Button That Should Change it's Name Based on Input Value")
        .click()
})
Then ('The button name is changing', () => {
    cy.get('button#updatingButton')
        .should('have.text', 'change button name')
})




let chromeCPU;
// Scenario: Dynamic table
Given ('Opening page with Dynamic table test', () => {
    cy.visit('http://uitestingplayground.com/dynamictable')
})
When ('I find the Chrome value in table', () => {
    // cy.get('div[role=row]').each(el => {

    // })
    cy.contains('div[role=row]', 'Chrome')
        .children()
        .contains('%')
        .invoke('text')
        .then(text => {
            chromeCPU = text;
        })
})
Then ('I compare load CPU value', () => {
    cy.get('p.bg-warning')
        .should('contain', chromeCPU)
})
