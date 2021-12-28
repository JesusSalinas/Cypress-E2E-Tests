import LoginPage from '../app/pages/login_page';
import OverviewPage from '../app/pages/overview_page';

const login = new LoginPage();
const overview = new OverviewPage();
const faker = require('faker');
faker.locale = 'es_MX';
let user;
let pass;

describe('TEST SCENARIO: LOGIN', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        login.visit();
    });
    it('TC#01: Wrong User', () => {
        user = faker.internet.userName();
        pass = Cypress.env('PASSWORD');
        login.submitForm(user, pass);
        login.assertLabelWrongCredentials();
    });
    it('TC#02: Wrong Password', () => {
        user = Cypress.env('ADMIN_USER');
        pass = faker.internet.password();
        login.submitForm(user, pass);
        login.assertLabelWrongCredentials();
    });
    it('TC#03: Login Successfull', () => {
        user = Cypress.env('ADMIN_USER');
        pass = Cypress.env('PASSWORD');
        login.submitForm(user, pass);
        overview.assertLandingPage();
    });
});