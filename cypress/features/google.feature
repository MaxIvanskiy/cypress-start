Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

    Given "google" page is opened
    Then Type "cypress.io" in the search field
    Then Press enter to find "cypress.io" with Google
