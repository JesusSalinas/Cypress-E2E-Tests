/// <reference types="cypress" />

const back = Cypress.env('API_URL');
const token = Cypress.env('TOKEN');
const faker = require('faker');
faker.locale = 'es_MX';


describe('TEST SCENARIO: Todoist', () => {
    before(() => {
        cy.log('Before all the tests');
    });
    beforeEach(() => {
        cy.log('Before each test');
    });
    it('TC#01: Get all the projects', () => {
        cy.request({
            method: 'GET',
            url: `${back}/projects`, 
            headers: { Authorization: `Bearer ${token}` }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('duration');
            expect(response.body).to.be.a('array');
        });
    });
});
