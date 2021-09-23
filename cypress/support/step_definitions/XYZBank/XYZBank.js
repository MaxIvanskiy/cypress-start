const { Before, After, Given, Then} = require("cypress-cucumber-preprocessor/steps");
const { loginAsCustomer, addDeposit, checkTransaction, checkBalance, openTransactionPage, resetTransactions, selectAccount, checkTransactionsListIsEmpty, reopenTransactionsList, check, withdrawlOverdraft } = require("../../actions/accountActions");

// Scenario: Add a deposit like a customer and reset transactions
Given ('User logged in as customer', () => {
    loginAsCustomer()
})
When ('User add a deposit', () => {
    selectAccount('1006')
    addDeposit(500)
    checkBalance()
})
Then ('User can see transaction in transactions list', () => {
    openTransactionPage()
    if(check()){
        reopenTransactionsList()
    }
    checkTransaction(500)
})

// Scenario: Reset transactions
Given ('User logged in as customer', () => {
    loginAsCustomer()
})
And ('transactions added', () => {
    addDeposit(200)
})
When ('User open transactions page', () => {
    openTransactionPage()
})
And ('User reset transactions list', () => {
    resetTransactions()
})
Then ('Transactions list is empty', () => {
    checkTransactionsListIsEmpty()
})

// Scenario: Withdrawl Overdraft
Given ('User logged in as customer', () => {
    loginAsCustomer()
})
When ('User try make withdrawl overdraft', () => {
    withdrawlOverdraft()
})
// Then ('Eror message appear', () => {

// })