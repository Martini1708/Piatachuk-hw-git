import { faker } from '@faker-js/faker';
import * as pet from '../fixtures/pet.json'

pet.id = parseInt(faker.random.numeric(5));
pet.name = faker.animal.crocodilia.name;
pet.category.id = parseInt(faker.random.numeric(3));
pet.category.name = faker.animal.type();

describe('Pet suite', () => {

  it('Pet creation', () => {
    cy.log('Create pet');
    cy.request('POST', '/pet', pet).then( response => {
      console.log(response);
      //cy.log(`Request body: ${response.allRequestResponses[0]["Request Body"]}`);
      // cy.log(`Request headers:  ${JSON.stringify(response.allRequestResponses[0]["Request Headers"])}`);
      // cy.log(`Request Url:  ${JSON.stringify(response.allRequestResponses[0]["Request URL"])}`);
      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal('OK');
      expect(response.isOkStatusCode).to.be.true;
      //expect(response.body.id).to.be.equal(pet.id);
      expect(response.body.name).to.be.equal(pet.name);
      expect(response.body.category.id).to.be.equal(pet.category.id);
      expect(response.body.category.name).to.be.equal(pet.category.name);
      //petId = response.body.id;
      //console.log(petId)
    })
  })

  it('Pet creation', () => {
    cy.log('Create pet');
    cy.request('GET', `/pet/${pet.id}`).then( response => {
      console.log(response);
     
      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal('OK');
      expect(response.isOkStatusCode).to.be.true;
      expect(response.body.id).to.be.equal(pet.id);
      expect(response.body.name).to.be.equal(pet.name);
      expect(response.body.category.id).to.be.equal(pet.category.id);
      expect(response.body.category.name).to.be.equal(pet.category.name);
    })
  })
})

  it('Pet update', () => {
    cy.log('Update pet by id');
    cy.request('PUT', '/pet' ,pet).then( response => {
      console.log(response);
      
      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal('OK');
      expect(response.isOkStatusCode).to.be.true;
      expect(response.body.id).to.be.equal(pet.id);
      expect(response.body.name).to.be.equal(pet.name);
      expect(response.body.category.id).to.be.equal(pet.category.id);
      expect(response.body.category.name).to.be.equal(pet.category.name);
    })
  })


  it('Find pet', () => {
    cy.log('Find pet by status');
    cy.request('GET', `/pet/${pet.id}`).then( response => {
      console.log(response);

      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal('OK');
      expect(response.isOkStatusCode).to.be.true;
      expect(response.body.id).to.be.equal(pet.id);
      expect(response.body.name).to.be.equal(pet.name);
      expect(response.body.category.id).to.be.equal(pet.category.id);
      expect(response.body.category.name).to.be.equal(pet.category.name);
      expect(response.body.status).to.be.equal(pet.status)
    })
  })

  it('FORM pet', () => {
    cy.log('Update pet with id ${pet.id}');
    cy.request('POST', `/pet/${pet.id}`).then( response => {
      console.log(response);
  
      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal('OK');
      expect(response.isOkStatusCode).to.be.true;
  
      cy.request('GET', `/pet/${pet.id}`).then( response => {
        console.log(response);
        expect(response.status).to.be.equal(200);
        expect(response.statusText).to.be.equal('OK');
        expect(response.isOkStatusCode).to.be.true;
        expect(response.body.id).to.be.equal(pet.id);
        expect(response.body.name).to.be.equal(pet.name);
        expect(response.body.category.id).to.be.equal(pet.category.id);
        expect(response.body.category.name).to.be.equal(pet.category.name);
    })
  })
})

  it('DELETE pet', () => {
    cy.log('DELETE pet');
    cy.request('DELETE', `/pet/${pet.id}`).then( response => {
      console.log(response);
      
      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal('OK');
     
    
    })
    })

