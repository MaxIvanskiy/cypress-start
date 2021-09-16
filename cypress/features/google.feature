Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Search cypress.io with Google
    Given Google main page is open
    When I search for "cypres.io"
    Then I see google page with "Google" title