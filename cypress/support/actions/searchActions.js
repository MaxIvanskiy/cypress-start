import { searchEngine } from "../pageObjects/pageObjects";

export const visitSearchPage = () => {
    cy.visit(searchEngine.searchPage)
}

export const enterSearchQuery = (search) => {
    cy.get(searchEngine.searchInput)
        .type(search)
        .type('{enter}')
}

export const checkPage = (title) => {
    cy.title().should('include', title)
}