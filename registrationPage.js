
export class RegistrationPage {

    clickOnLoginPage(){ 
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('#newCustomerLink').should('contain','Not yet a customer?').click()
    }

    clickOnTabsPage(){
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button').click()
        cy.get('.cc-btn.cc-dismiss').should('contain', 'Me want it!').click()
    }

}

export const onRegistrationPage = new RegistrationPage()
