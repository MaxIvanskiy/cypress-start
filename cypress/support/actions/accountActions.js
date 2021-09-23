import { customerLoginPage } from "../pageObjects/pageObjects";
import { loginPage } from "../pageObjects/pageObjects";
import { customerAccountPage } from "../pageObjects/pageObjects";
import { transactionsPage } from "../pageObjects/pageObjects";


export const loginAsCustomer = () => { 
    cy.visit('/')
    cy.get(loginPage.btnCustomerLogin)
        .click()
    cy.get(customerLoginPage.selectName)
        .select('Harry Potter')
    cy.get(customerLoginPage.btnLogin)
        .click() 
    cy.get(customerAccountPage.customerName)
        .should('contain', 'Harry Potter')
}
export const selectAccount = (account) => {
    cy.get(customerAccountPage.selectAccount)
        .select(account)
    cy.get(customerAccountPage.accountInfo).eq(0)
        .should('contain', account)
}
export const addDeposit = (sum) => {
    cy.get(customerAccountPage.accountInfo).eq(1)
        .should('contain', 0)
    cy.get(customerAccountPage.btnDeposit)
        .click()
    cy.get(customerAccountPage.inputAmount)
        .should('be.visible')
        .type(sum)    
    cy.get(customerAccountPage.btnSubmit)
        .click()
    cy.get(customerAccountPage.messageResult)
        .should('contain', 'Deposit Successful')
        .should('be.visible')
}
export const withdrawl = (sum) => {
    cy.get(customerAccountPage.btnWithdrawl)
        .click()
    cy.get(customerAccountPage.inputAmount)
        .should('be.visible')
        .type(sum)    
    cy.get(customerAccountPage.btnSubmit)
        .click()
    cy.get(customerAccountPage.messageResult)
        .should('contain', 'Transaction successful')
        .should('be.visible')
}
export const withdrawlOverdraft = () => {
    cy.get(customerAccountPage.accountInfo).eq(1)
        .invoke('text').then(balance => {
            cy.get(customerAccountPage.btnWithdrawl)
                .click()
            cy.get(customerAccountPage.inputAmount)
                .should('be.visible')
                .type(+balance + 1)
            cy.get(customerAccountPage.btnSubmit)
                .click() 
            cy.get(customerAccountPage.accountInfo).eq(1)
                .invoke('text')
                .should('be.equal', balance)
        })
    cy.get(customerAccountPage.messageResult)
        .should('contain', 'Transaction Failed')
        .should('be.visible')

    // cy.get(customerAccountPage.accountInfo).eq(1)
    //     .invoke('text').then((text) => {
    //         cy.wrap(text).as('actualBalance')
    //         cy.get(customerAccountPage.btnWithdrawl)
    //             .click()
    //         cy.get(customerAccountPage.inputAmount)
    //             .should('be.visible')
    //             .type(+text + 1)
    //         cy.get(customerAccountPage.btnSubmit)
    //             .click() 
    //     })     
    // cy.get(customerAccountPage.messageResult)
    //     .should('contain', 'Transaction Failed')
    //     .should('be.visible')
    // cy.get('@actualBalance').then((balance) => {
    //     cy.get(customerAccountPage.accountInfo).eq(1)
    //         .invoke('text')
    //         .should('be.equal', balance)
    // })
}
export const checkBalance = () => {
    cy.get(customerAccountPage.accountInfo).eq(1)
        .should('be.visible')
}
export const openTransactionPage = () => {
    cy.get(customerAccountPage.btnTransactions)
        .click()
}
export const checkTransaction = (sum) => {
    cy.get(transactionsPage.transactionsList)
        .should('be.visible')
    cy.get(transactionsPage.transactionsAmount)
        .contains(sum)
        .should('be.visible')    
}
export const resetTransactions = () => {
    cy.get(transactionsPage.btnReset)
        .click()
}
export const checkTransactionsListIsEmpty = () => {
    cy.get(transactionsPage.transactionsList)
        .should('not.exist')
}
export const reopenTransactionsList = () => {
    cy.get(transactionsPage.btnBack)
        .click()
    cy.get(customerAccountPage.btnTransactions)
        .click()
}
export const check = () => {
    if(transactionsPage.transactionsList){
        return true;
    }
    return false;   
}
