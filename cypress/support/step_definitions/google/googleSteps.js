const {
    Before,
    After,
    Given,
    Then
} = require("cypress-cucumber-preprocessor/steps");

import { visitSearchPage } from "../../actions/searchActions";
import { enterSearchQuery } from "../../actions/searchActions";
import { checkPage } from "../../actions/searchActions";

Before(() => {
  
});


// Scenario: Search cypress.io with Google
Given ('Google main page is open', () => {
    visitSearchPage();
})
When ('I search for {string}', (search) => {
    enterSearchQuery(search);
})
Then ('I see google page with {string} title', (title) => {
    checkPage(title);
})