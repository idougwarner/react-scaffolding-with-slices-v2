export default describe('Sign up Page', () => {
  it('Fetcing Signup Page', () => {
    cy.visit('http://localhost:3000/signup');
  });

  it('Submitting Signup form - With errors', () => {
    cy.get('button[type="submit"]').click();
  });
  it('Filling Signup form', () => {
    cy.get('input[name="firstName"]').type('this is first name').should('have.value', 'this is first name');
    cy.get('input[name="lastName"]').type('this is last name').should('have.value', 'this is last name');
    cy.get('input[name="email"]').type('text@email.com').should('have.value', 'text@email.com');
    cy.get('input[name="password"]').type('Abc123456*').should('have.value', 'Abc123456*');
    cy.get('input[name="confirmPassword"]').type('Abc123456*').should('have.value', 'Abc123456*');
  });
  it('Submitting Signup form', () => {
    cy.get('button[type="submit"]').click();
  });
});
