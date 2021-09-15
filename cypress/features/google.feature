Feature: Google Main Page

  I want to open a search engine
  
  @ignore-this
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see 'Google' in the title

  @ignore-this
  Scenario: Find 'cypress.io' with google
    Given Google page is opened
    When I type 'cypress.io' in the search field
    And I Press enter to find 'cypress.io' with Google
    Then I see search results page
    And I see 'cypress.io' in search field

  @ignore-this
  Scenario: Count search results and check it
    Given Google page is open with 'cypress.io' search results
    Then I count search results 
    And I check if all results have 'cypress' text

  