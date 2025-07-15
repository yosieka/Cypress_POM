
const loginPage = new LoginPage()
const bookPage = new BookPage()
import dataBook from '../../fixtures/data_BookPage.js';


describe('User Create Book', () => {

    it('User Create Book - Valid', () => {
        loginPage.loginAdmin()
        bookPage.clickButtonTambah()
        bookPage.fillJudulBuku(dataBook.name)
        bookPage.fillPengarang(dataBook.name)
        bookPage.fillPenerbit(dataBook.name)
        bookPage.fillTahunTerbit(dataBook.year)
        bookPage.fillHarga(dataBook.harga)
        bookPage.clickButtonSubmit()
        loginPage.containAssertion(dataBook.name)
        loginPage.containAssertion(dataBook.year)

        cy.writeFile('cypress/fixtures/savedBook.json', {
        name: dataBook.name,
        year: dataBook.year,
        harga: dataBook.harga
         })

    });
});