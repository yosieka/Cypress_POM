class BookPage{


    clickButtonTambah(){
        cy.get('a[data-tooltip="Tambah Buku"]').click()
    }
    fillJudulBuku(judul){
        cy.get('[name="judul_buku"]').type(judul)
    }
    fillPengarang(pengarang){
        cy.get('[name="pengarang"]').type(pengarang)
    }
    fillPenerbit(penerbit){
        cy.get('[name="penerbit"]').type(penerbit)
    }
    fillTahunTerbit(tahun){
        cy.get('[name="tahun_terbit"]').type(tahun)
    }
    fillHarga(harga){
        cy.get('[name="harga"]').type(harga)
    }
    clickButtonSubmit(){
        cy.get('#btnCreate').click()
    }

    clickButtonEdit(savedBook){
        cy.contains('td', savedBook)
        .parent('tr')
        .find('a[data-tooltip="Ubah Buku"]') // pastikan class ini sesuai dengan class tombol edit kamu
        .click()
    }

    saveSelectOptionsToFixture(fieldName, fileName) {
        cy.get(`select[name="${fieldName}"] option`).then($options => {
            const values = [...$options]
              .map(option => option.value)
              .filter(Boolean) // skip empty option

            cy.writeFile(`cypress/fixtures/${fileName}`, values)
        })
    }

    selectRandomOption(fieldName, fixtureFile) {
        cy.fixture(fixtureFile).then((optionsArray) => {
            const randomValue = optionsArray[Math.floor(Math.random() * optionsArray.length)];
            cy.wrap(randomValue).as(`selected_${fieldName}`); // simpan value terpilih ke alias
            cy.get(`select[name="${fieldName}"]`).select(randomValue);
        });
    }


}

export default BookPage
