///«reference types="cypress" />
it ('Quering elements', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
   
//     cy.get('.btn.btn-orange.pull-right')
//     cy.contains('Continue').click()

//     cy.get('input[name="firstname"]')
//    .type('Name')

//    cy.get('input[name="lastname"]')
//    .type('Last name')

//    cy.get('#AccountFrm_email')
//    .type('piatachukantonina@gmail.com')

//    cy.get('#AccountFrm_telephone')
//    .type('+380636967188')

//    cy.get('#AccountFrm_fax')
//    .type('+380636967188')

//    cy.get('#AccountFrm_company')
//    .type('Test')

//    cy.get('#AccountFrm_address_1')
//    .type('Street 1')

//    cy.get('#AccountFrm_address_2')
//    .type('Street 2')

//    cy.get('#AccountFrm_city')
//    .type('Kyiv')

//    cy.get('#AccountFrm_zone_id')
//    .select('Aberdeen')

//    cy.get('#AccountFrm_postcode')
//    .type('1111')

//    cy.get('#AccountFrm_loginname')
//    .type('Tonya')

//    cy.get('#AccountFrm_password')
//    .type('12345')

//    cy.get('#AccountFrm_confirm')
//    .type('12345')

//    cy.get('#AccountFrm_agree')
//    .click()

//    cy.get('.lock-on-click')
//    cy.contains('Continue').click()
   
   cy.get('#loginFrm_loginname')
   .type('Tonya')
   
   cy.get('#loginFrm_password')
   .type('12345')

   cy.get('.btn.btn-orange.pull-right')
   cy.contains('Login')
   .click()
   

})
   