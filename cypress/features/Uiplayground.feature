Feature: ui testing playground 

    I want to pass tests

    # @focus
    # Scenario: Dynamic ID
    #     Given Opening page with dynamic id
    #     Then I get button with dynamic ID

    # @focus
    # Scenario: Class Atribute
    #     Given Opening page with class attr
    #     Then I click button with btn-primary Class

    # @focus
    # Scenario: Click
    #     Given Opening page with click testing
    #     When I click the button
    #     Then Button should have class btn-success
    #     And Button should have green background-color

    # @focus
    # Scenario: Hidden layers
    #     Given Opening page with hidden layers test
    #     When I click green button 
    #     Then Blue button is displayed
    #     And Green button is under Blue button by z-index

    # @focus
    # Scenario: Load delay
    #     Given Opening main page of uitestingplayground.com
    #     When I click Load Delays link
    #     Then I wait The load delays page is loaded

    # @focus
    # Scenario: Scrollbars
    #     Given Opening page with Scrollbars test
    #     Then I find a button in the scroll view

    # @focus
    # Scenario: Progress Bar
    #     Given Opening page with Progress Bar test
    #     When I click Start button
    #     Then I click Stop button when Progress bar value is equal to 45%
    #     And I check the Progress Bar value

    # @focus
    # Scenario: Mouse Over
    #     Given Opening page with Mouse Over test
    #     When I click the Click me link
    #     Then Counter text is changed to 2

    # @focus
    # Scenario: AJAX Data
    #     Given Opening page with AJAX Data test
    #     When I click blue button
    #     And I wait for the data loaded
    #     Then I check loaded text

    # @focus 
    # Scenario: Client side delay
    #     Given Opening page with Client Side Delay test
    #     When I click button
    #     Then I wait for content load
        
    # @focus
    # Scenario: Text input
    #     Given Opening page with Text input test
    #     When I input test in the input field
    #     And I press the button
    #     Then The button name is changing

    @focus
    Scenario: Dynamic table
     Given Opening page with Dynamic table test
     When I find the Chrome value in table
     Then I compare load CPU value 




# DONE
    # 1  Dynamic ID
    # 2  Class Atribute
    # 3  Hidden layers
    # 4  Load Delay 
    # 5  AJAX Data 
    # 6  Click 
    # 7  Scrollbars 
    # 8  Progress Bar 
    # 9  Mouse Over 
    # 10 Clients side delay
    # 11 Text Input

# NEXT                            
    # 12 Dynamic Table
    # 13 Verify Text             
    # 14 Visibility 
    # 15 Sample App             
    # 16 Non-Breaking space