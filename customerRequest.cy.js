import * as comment from '../fixtures/comment.json'
import { faker } from "@faker-js/faker"

comment.text = faker.internet.color()

it('Customer request positive pass', () => {
           
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact') 
           
    cy.get('.mat-card.mat-focus-indicator.mat-elevation-z6').find('h1').contains('Customer Feedback');
    cy.get('.cc-compliance').should('contain', 'Me want it!').last().click()
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').should('contain','Dismiss').click()
    cy.get('#comment').type(comment.text)
    cy.get('#rating').click()
    cy.get('.mat-slider-thumb-container').invoke('attr', 'style' ,'transform: translateX(-50%);')

    let captcha1 = (cy.get('#captcha'))
    let captcha2 = eval(captcha1)
   
    
    cy.get('#captchaControl').click()
    cy.get('#submitButton').click().should('not.be.disabled')
      })


      it.skip('Customer request empty comment field', () => {
           
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact') 
               
        cy.get('.mat-card.mat-focus-indicator.mat-elevation-z6').find('h1').contains('Customer Feedback');
        cy.get('.cc-compliance').should('contain', 'Me want it!').last().click()
        cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').should('contain','Dismiss').click()
        cy.get('#comment').click()
        cy.get('#rating').click()
        cy.get('.mat-slider-thumb-container').invoke('attr', 'style' ,'transform: translateX(-50%);')
        cy.get('.mat-form-field-subscript-wrapper.ng-tns-c119-9')
        cy.get('.mat-form-field.ng-tns-c119-9').click()
        cy.get('#submitButton').click().should('be.disabled')
          })