class login_page {
    constructor(){
        this.usernameField = 'input#user-name';
        this.passwordField = 'input#password';
        this.loginButton = 'input#login-button';
        this.errorMessage = 'h3';
        this.menuButton = 'button#react-burger-menu-btn';
        this.logoutLink = 'a#logout_sidebar_link';
    }
    visit(){
        cy.visit('/');
    }
    submitForm(user, pass){
        cy.get(this.usernameField).type(user);
        cy.get(this.passwordField).type(pass);
        cy.get(this.loginButton).click();
    }
    assertLabelWrongCredentials(){
        cy.get(this.errorMessage).contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
        cy.screenshot({overwrite: true});
    }
}
export default login_page;