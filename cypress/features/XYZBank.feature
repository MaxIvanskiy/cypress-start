Feature: XYZBank app testing

    @focus
    Scenario: Add a deposit like a customer and reset transactions
        Given User logged in as customer
        When User add a deposit
        Then User can see transaction in transactions list

    @focus
    Scenario: Reset transactions
        Given User logged in as customer
        And transactions added
        When User open transactions page
        And User reset transactions list
        Then Transactions list is empty

    @focus
    Scenario: Withdrawl Overdraft
        Given User logged in as customer
        When User try make withdrawl overdraft
        # Then Eror message appear