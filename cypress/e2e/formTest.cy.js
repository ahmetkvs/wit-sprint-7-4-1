describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/');
  })
  it('Should render email, password, terms check', () => {
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('input[name="terms"]').should('exist');
  })
  it('See Success if everyting correct', ()=>{
    cy.get('input[name="password"]').type('Hs9FVCKFrqf1mdH')
    cy.get('input[name="email"]').type('Marcelo89@yahoo.com')
    cy.get('input[name="terms"]').check()
    cy.get('button').should('not.be.disabled');
    cy.get('button').click();
    cy.get('p').should('have.text', 'Success');
  })
})