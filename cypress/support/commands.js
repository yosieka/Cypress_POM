// Pass uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

// Calling all pages from ../support/pages/index.js
import * as pages from './pages'
Cypress.pages = pages
Object.keys(pages).forEach(page => {
    global[page] = pages[page]
})
