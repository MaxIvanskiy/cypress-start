describe('Google check', () => {
    it('find cypress.io with Google', () => {
        cy.visit('http://www.google.com')

        cy.get('input.gsfi')
            .type('cypress.io{enter}')

        cy.url()
            .should('include', 'cypress.io')
        
        cy.get('input.gsfi')
            .should('have.value', 'cypress.io')     
    });
});