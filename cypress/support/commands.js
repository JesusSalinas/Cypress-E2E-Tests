const faker = require('faker');
faker.locale = 'es_MX';

Cypress.Commands.add('get_CLABE', () => {
    cy.fixture('catalogue/catalogue.json').then((cat) => {
        var bankCode = cat.bank_code[Math.floor(Math.random() * cat.bank_code.length)].code;   
        var account = faker.finance.mask(11);
        var clabe = bankCode + cat.place_code[Math.floor(Math.random() * cat.place_code.length)].code + account + '1';
        return clabe;
    });
});

Cypress.Commands.add('get_RFC', () => {
    var rfc;
    var verify;
    var sum = 0;
    const name = faker.name.firstName().slice(0,1).toUpperCase();
    var lastName = faker.name.lastName().slice(0,2);
    lastName = lastName.replace(/á/gi,'a');
    lastName = lastName.replace(/é/gi,'e');
    lastName = lastName.replace(/í/gi,'i');
    lastName = lastName.replace(/ó/gi,'o');
    lastName = lastName.replace(/ú/gi,'u');
    lastName = lastName.replace(/ñ/gi,'n');
    lastName = lastName.toUpperCase();
    const middleName = faker.name.middleName().toUpperCase();
    const date = faker.date.past(50,'2010-01-01').toLocaleDateString('es-MX', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    });
    const day = date.slice(0,2);
    const month = date.slice(3,5);
    const year = date.slice(6,8);
    var homonimio = faker.name.lastName().slice(0,2);
    homonimio = homonimio.replace(/á/gi,'a');
    homonimio = homonimio.replace(/é/gi,'e');
    homonimio = homonimio.replace(/í/gi,'i');
    homonimio = homonimio.replace(/ó/gi,'o');
    homonimio = homonimio.replace(/ú/gi,'u');
    homonimio = homonimio.replace(/ñ/gi,'n');
    homonimio = homonimio.toUpperCase();
    rfc = lastName + middleName + name + year + month + day + homonimio;
    const dictionary = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ';
    for(var i=0; i<12; i++) {
        sum += dictionary.indexOf(rfc.charAt(i)) * (13 - i); 
    }
    verify = 11 - sum % 11; 
    if(verify == 11) {
        verify = 0; 
    }  
    else if(verify == 10) {
        verify = 'A';
    } 
    rfc = rfc + verify;
    return rfc; 
});