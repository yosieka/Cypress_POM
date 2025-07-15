// Initiate loginPage with LoginPage() from pages/index.js to call of its function
const loginPage = new LoginPage()
// Initiati global variable for loginData
let loginData

// Creating Test Scenario
describe('Test Scenario - Login', () => {
    // Do action before 'it' or test case action
    beforeEach('User Access Page', () => {
        // Do visit action to application
        cy.visit(Cypress.env('url')+'login')

        // Take data from fixture and store it in a variable
        cy.fixture('data_LoginPage').then(loginRes => {
            // loginData will store all of loginRes that aliases data from fixture/data_LoginPage.json
            loginData = loginRes
        })
    })
    // Create the test case
    it('User Login - Valid Credential', () => {
        // Call fillUsername from support/pages/functionLoginPage
        loginPage.fillEmail(loginData.username)
        // Call fillPassword from support/pages/functionLoginPage
        loginPage.fillPassword(loginData.password)
        // Call clickButton from support/pages/functionLoginPage
        loginPage.clickButton()
        loginPage.containAssertion(loginData.assertion)
    })

    it('', () => {
        
    });
})