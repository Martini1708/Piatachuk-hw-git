//describe('home work', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)});
it('passes', () => {
       
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com') 
     
      cy.contains('Material Dark').click();
      cy.contains('Forms').click();
      cy.contains('Form Layouts').click();
      cy.get('[placeholder="Jane Doe"]').type('Name');
      cy.get('[placeholder="Email"]').eq(0).type('test@gmail.com');
  
    })
  
