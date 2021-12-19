/// <reference types="cypress" />

const back = Cypress.env('API_URL');
const token = Cypress.env('TOKEN');
const faker = require('faker');
faker.locale = 'es_MX';
let color;


describe('TEST SCENARIO: Todoist', () => {
    before(() => {
        cy.log('Before all the tests');
    });
    beforeEach(() => {
        cy.fixture('colors/colors.json').then((clrs) => {
            color = clrs[Math.floor(Math.random() * clrs.length)];
        });
    });
    it('TC#01: Create a project', () => {
        cy.request({
            method: 'POST',
            url: `${back}/projects`, 
            headers: { Authorization: `Bearer ${token}` },
            body: {
                name: faker.finance.accountName(),
                color: color.id,
                favorite: true
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('duration');
            expect(response.body.id).to.be.a('number');
            expect(response.body.name).to.be.a('string');
            expect(response.body.comment_count).to.be.a('number');
            expect(response.body.color).to.be.a('number');
            expect(response.body.shared).to.be.a('boolean');
            expect(response.body.sync_id).to.be.a('number');
            expect(response.body.order).to.be.a('number');
            expect(response.body.favorite).to.be.a('boolean');
            expect(response.body.url).to.be.a('string');
        });
    });
});
