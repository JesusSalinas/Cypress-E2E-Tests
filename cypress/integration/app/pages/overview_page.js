class overview_page {
    constructor(){
        this.appLogo = '.app_logo';
        this.menuButton = 'button#react-burger-menu-btn';
    }
    visit(){
        cy.visit('/inventory.html');
    }
    assertLandingPage(){
        cy.get(this.appLogo).should('be.visible');
        cy.get(this.menuButton).should('be.visible');
        cy.screenshot({overwrite: true});
    }
}
export default overview_page;