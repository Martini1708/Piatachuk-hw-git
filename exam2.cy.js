import { onRegistrationPage }  from "../support/page_objects/registrationPage"
import * as user from '../fixtures/user.json'
import { faker } from "@faker-js/faker"

user.email = faker.internet.email()
user.password = faker.internet.password(20, true, /[A-Za-z0-9`!`]/, 'Hello1 ')
//user.city = faker.word()
//user.country = user.country
//user.name = user.name
//user.state = faker.state()
//user.zipcode = faker.word(5)
//user.mobile = user.mobile
//user.adress = faker.address()


describe('Exam', () => {
 beforeEach ('open application', () =>
 { cy.visit('/')
})
    it('User registration and login positive pass', () => {
        
        onRegistrationPage.clickOnTabsPage()
        onRegistrationPage.clickOnLoginPage()
        
            cy.get('#emailControl').type(user.email)
            cy.get('#passwordControl').type(user.password)
            cy.get('#repeatPasswordControl').type(user.password)
            cy.get('.security-container').children().first().click()
            cy.get('.mat-option-text').should('contain', ' Name of your favorite pet?').eq(4).click()
            cy.get('#securityAnswerControl').type('Martini')
            cy.get('#registerButton').click()
            cy.get('.mat-simple-snack-bar-content').should('contain', 'Registration completed successfully. You can now log in.')
            cy.get('.mat-card.mat-focus-indicator.mat-elevation-z6').children().first().should('contain','Login');
            cy.get('#email').click().type(user.email)
            cy.get('#password').click().type(user.password)
            cy.get('.mat-checkbox-inner-container').click()
            cy.get('#loginButton').click() 
          cy.get('.item-name').should('contain','Apple Juice (1000ml)')
          cy.get('.mat-focus-indicator.btn-basket.mat-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').eq(0).click()
          cy.get('.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted').click()
          cy.url().should('eq','https://juice-shop-sanitarskyi.herokuapp.com/#/basket')
          cy.get('#checkoutButton').click()
          cy.contains('Add New Address').click()
          cy.contains('Add New Address')
          cy.get('.mat-form-field.ng-tns-c119-25 >.mat-form-field-wrapper >.mat-form-field-flex > .mat-form-field-infix').type(user.country)
          cy.get('.mat-form-field.ng-tns-c119-26 >.mat-form-field-wrapper >.mat-form-field-flex > .mat-form-field-infix').type(user.name)
          cy.get('.mat-form-field.ng-tns-c119-27 >.mat-form-field-wrapper >.mat-form-field-flex > .mat-form-field-infix').type(user.mobile)
          cy.get('.mat-form-field.ng-tns-c119-28 >.mat-form-field-wrapper >.mat-form-field-flex > .mat-form-field-infix').type(user.zipcode)
          cy.get('#address').type(user.adress)
          cy.get('.mat-form-field.ng-tns-c119-30 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(user.city)
cy.get('.mat-form-field.ng-tns-c119-31 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Test')
 cy.get('#submitButton > .mat-button-wrapper').click()
 cy.get('.mat-radio-inner-circle').click()
cy.get('.btn-next').click()
cy.get('.mat-radio-inner-circle').eq(0).click()
cy.get('.nextButton').click()
cy.get('#mat-expansion-panel-header-0 > .mat-content > .mat-expansion-panel-header-description').click()
cy.get('.mat-form-field.ng-tns-c119-35 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(user.name)
cy.get('.mat-form-field.ng-tns-c119-36 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('1234567891019199')
cy.get('.mat-form-field.ng-tns-c119-37 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('contain', '1').eq(0).select('1')
cy.get('.mat-form-field.ng-tns-c119-38 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('contain', '2080').eq(0).select('2080')
cy.get('#submitButton > .mat-button-wrapper').click()
cy.get('.mat-radio-outer-circle').click()
cy.get('.nextButton').click()
cy.get('#checkoutButton').click()
cy.get('[fxflex="60%"] > :nth-child(1) > .confirmation').should('contain','Thank you for your purchase!')


    })
    })
      

    user.email = faker.internet.email()
    user.password = faker.internet.password(5)
    beforeEach ('open application', () =>
    { cy.visit('/')
   })
       it.skip('User registration ', () => {
           
           onRegistrationPage.clickOnTabsPage()
           onRegistrationPage.clickOnLoginPage()
             cy.get('#emailControl').type(user.email)
             cy.get('#passwordControl').type(user.password)
             cy.get('#repeatPasswordControl').type(user.password)
             cy.get('.security-container').children().first().click()
             cy.get('.mat-option-text').should('contain', ' Name of your favorite pet?').eq(4).click()
             cy.get('#securityAnswerControl').type('Martini')
             cy.get('#registerButton').click()
       })
       