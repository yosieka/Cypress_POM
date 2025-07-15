// This will create a class that contains every function that will be used in Login Page
class LoginPage {
    // All parameters used by all functions in this class can be inputted in this file: 01. TestScenario_Login.cy

    // This script used to fill in Email or Username with parameter: email
    fillEmail(email){ 
        cy.get('#username', {timeout: 3000}) // please adjust with the web selector
        .should('be.visible')
        .type(email)
    }
    // This script used to fill Password with parameter: password
    fillPassword(password){
        cy.get('#password', {timeout: 3000}) // please adjust with the web selector
        .should('be.visible')
        .type(password)
    }
    // This script used to click Login button
    clickButton(){
        cy.get('button[type="submit"]', {timeout: 3000}) // please adjust with the web selector
        .contains('Masuk')
        .should('be.visible').click() // 
    }
    // This script used to do assertion validation using parameter: assertion
    containAssertion(assertion){
        cy.contains(assertion, {timeout: 3000}) // please adjust with the web selector
        .should('be.visible')
    }

    loginAdmin(){
        cy.visit(Cypress.env("url")+"/login")
        cy.get('#username').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('button[type="submit"]', {timeout: 3000}).click()
    }
}

// This code will be export the class so we can use all of its function
export default LoginPage

// After doing export, please go to: support/pages/commands.js