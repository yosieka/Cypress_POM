const loginPage = new LoginPage()
const bookPage = new BookPage()

let savedBook

describe('Admin Edit Book', () => {
    beforeEach(() => {
        loginPage.loginAdmin()
        cy.fixture('savedBook').then(Book=> {
            savedBook = Book
        })
    });

    it('Edit Book - Valid', () => {
        bookPage.clickButtonEdit(savedBook.name)
    });

    it('Order Buku', () => {
        cy.visit(Cypress.env('url')+'/order')
        bookPage.saveSelectOptionsToFixture('kode_buku', 'listBook.json')
        bookPage.selectRandomOption('kode_buku', 'listBook.json')
    });
});