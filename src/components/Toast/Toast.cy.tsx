describe('Toast', () => {
  it(`Should render Default Toast`, () => {
    cy.visit(`/iframe.html?id=components-notifications-toast--default`);
    cy.get(`svg`).should('exist');
    cy.get(`p`).contains('Success');
    cy.get(`p`).contains('Successfully created');
    cy.get(`button`).should('exist');
    cy.get('div').should('have.class', 'ring-1 ring-black');
  });

  it(`Should render Multi Toast `, () => {
    cy.visit(`/iframe.html?id=components-notifications-toast--multiple`);
    cy.get('div').should('have.class', 'space-y-4');
    cy.get(`p`).contains('Success!');
    cy.get(`p`).contains('Error!');
    cy.get(`p`).contains('Warning');
    cy.get(`button`).should('exist');
    cy.get(`svg`).should('exist');
  });
});

export {};
