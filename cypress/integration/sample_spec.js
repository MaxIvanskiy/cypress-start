describe('Google check', () => {
    it('type cypress.io in the search field', () => {
        cy.visit('http://www.google.com')

        cy.get('input.gsfi').type('cypress.io{enter}')

        cy.url()
        .should('include', 'cypress.io')
        
        cy.get('input.gsfi')
        .should('have.value', 'cypress.io')
            
    });
});