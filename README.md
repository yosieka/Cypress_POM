# This is Template for POM (Page Object Model)

## Introduction
Page Object Model is a design pattern that creates an object repository to store all element and function separately from the test script. This design pattern will be helpful to reduce duplication of code and improve test maintenance.

## How to Use POM
The usage of this model is very simple as I can say, since it would be like this:
- Create test folder where you put all test case script, i.e: 
  ``01. Login Page/01. Test_Scenario_Login.cy.js``
- Create fixture where you put all the data needed in test case, i.e: 
  ``dataLogin.json``
- Create page test functional folder where you put all function that will be used in that page, i.e: 
  ``support/pages/loginPage.js``

Now we have 3 folders as example. Every time we need to create function as **filling username**, we can create the function in the test functional folder as ``fillUsername(username){}``. Then this function should be called in the test scenario by this command ``functionLoginPage.fillUsername(data_LoginPage.username)``. With this way, the maintenance of code and data will be easy. For further implementation, please check the structure of this git repository folder.

Please note that the explanation above is general implementation, I will make the detail on each file on the folder.
