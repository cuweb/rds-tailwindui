describe('Alert', () => {
  it(`Should render Default Alert`, () => {
    cy.visit(`/iframe.html?id=components-notifications-alert--default`);
    cy.get(`h3`).contains('Success');
    cy.get(`button`).should('exist');
    cy.get(`.bg-green-50`).should('exist');
  });

  it(`Should render Multi Line Alert `, () => {
    cy.visit(`/iframe.html?id=components-notifications-alert--multiline`);
    cy.get(`h3`).contains('Success');
    cy.get(`button`).should('exist');
    cy.get(`.bg-green-50`).should('exist');
    cy.get(`div`).contains('Successfully created');
  });

  it(`Should render Stacked Alert `, () => {
    cy.visit(`/iframe.html?id=components-notifications-alert--stacked`);
    cy.get('div')
      .should('have.class', 'w-full')
      .and('have.class', 'space-y-4')
      .and('have.class', 'bg-green-50')
      .and('have.class', 'bg-cu-red-50')
      .and('have.class', 'bg-yellow-50')
      .and('have.class', 'bg-blue-50');
  });
});

export {};
