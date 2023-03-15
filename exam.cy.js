//describe('Exam', () => {

  it.skip('Registration positive pass', () => {
           
        cy.visit('/') 
        cy.get('.mat-focus-indicator.close-dialog.mat-raised-button').click()
        cy.get('.cc-btn.cc-dismiss').should('contain', 'Me want it!').click()
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('#newCustomerLink').should('contain','Not yet a customer?').click()
        cy.get('#emailControl').type('piatachukantonina@gmail.com')
        cy.get('#passwordControl').type('Karanfil1712!')
        cy.get('#repeatPasswordControl').type('Karanfil1712!')
        cy.get('.security-container').click()
        //cy.get('.mat-select-min-line.ng-tns-c130-24.ng-star-inserted').should('contain', 'Your eldest siblings middle name?')(?)
        cy.get('#securityAnswerControl').type('Martini')
        cy.get('#registerButton').click()

        })

 it.skip('Registration empty email field', () => {
 cy.visit('/') 
 cy.get('.mat-focus-indicator.close-dialog.mat-raised-button').click()
 cy.get('.cc-btn.cc-dismiss').should('contain', 'Me want it!').click()
 cy.get('#navbarAccount').click()
 cy.get('#navbarLoginButton').click()
 cy.get('#newCustomerLink').should('contain','Not yet a customer?').click()
 cy.get('#emailControl').click().should('not.have.value')
 cy.get('#passwordControl').click().should('not.have.value')
 //cy.get('#mat-error-22')
 cy.get('#repeatPasswordControl').click().should('not.have.value')
 //cy.get('#mat-error-23')
 cy.get('.security-container').click()
 cy.get('#securityAnswerControl').type('Martini')
cy.get('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary.mat-button-disabled').should('be.disabled')
    })


    it.skip('Not correct password', () => {
           
                cy.visit('/') 
                 
                  
                cy.get('.mat-focus-indicator.close-dialog.mat-raised-button').click()
                cy.get('.cc-btn.cc-dismiss').should('contain', 'Me want it!').click()
                cy.get('#navbarAccount').click()
                cy.get('#navbarLoginButton').click()
                cy.get('#newCustomerLink').should('contain','Not yet a customer?').click()
                cy.get('#emailControl').type('piatachukantonina@gmail.com')
                cy.get('#passwordControl').type('12345')
                cy.get('#repeatPasswordControl').type('12345')
                cy.get('.security-container').click()
                //cy.get('').should('contain', 'Name of your favorite pet?')
                cy.get('#securityAnswerControl').type('Martini')
                //cy.get('#registerButton').click()
                cy.get('.mat-slide-toggle-thumb').click()
                cy.get('#passwordControl').clear().type('Karanfil1712!')
                cy.get('#repeatPasswordControl').clear().type('12345')
                cy.get('.mat-error.ng-star-inserted').should('contain','Passwords do not match')
       
    })

          it.skip('Login', () => {
            cy.visit('/') 
              cy.get('.mat-focus-indicator.close-dialog.mat-raised-button').click()
              cy.get('.cc-btn.cc-dismiss').should('contain', 'Me want it!').click()
              cy.get('#navbarAccount').click()
              cy.get('#navbarLoginButton').click()
              cy.get('#email').click().type('piatachukantonina@gmail.com')
              cy.get('#password').click().type('12345')
              cy.get('.mat-checkbox-inner-container').click()
              cy.get('#loginButton').click()      
      
        })
    

      it.skip('Wrong password', () => {
           
    cy.visit('/') 
              cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click()
              cy.get('.cc-btn.cc-dismiss').should('contain', 'Me want it!').click()
              cy.get('#navbarAccount').click()
              cy.get('#navbarLoginButton').click()
              cy.get('#email').click().type('piatachukantonina@gmail.com')
              cy.get('#password').click().type('12345')
              cy.get('.mat-checkbox-inner-container').click()
              cy.get('#loginButton').click() 
              cy.get('.error.ng-star-inserted').should('contain', 'Invalid email or password.')
              cy.get('.mat-focus-indicator.mat-tooltip-trigger.mat-icon-button.mat-button-base.ng-star-inserted').click()
              cy.get('#password').clear().click().type('Karanfil1712!')
              cy.get('#loginButton').click()
        })


        it.skip('Wrong password', () => {
           
          cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search') 
                 
             cy.get('#navbarAccount').click()
                    cy.get('#navbarLoginButton').click()
                    cy.get('#email').click().type('piatachukantonina@gmail.com')
                    cy.get('#password').click().type('Karanfil1712!')
                    cy.get('.mat-checkbox-inner-container').click()
                    cy.get('#loginButton').click()
                    cy.get('.mat-card-image.img-responsive.img-thumbnail').should('contain', 'Apple Juice (1000ml)')
                    
              })

        

            