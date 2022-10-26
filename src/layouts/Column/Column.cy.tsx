describe('Column', () => {
  //single column
  it('Single Column Test', () => {
    cy.visit('/iframe.html?id=layouts-column--default');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'grid-cols-1');

    cy.get('p').should('exist').contains('Single Column');
  });

  // Two Column
  it('Two Column Test', () => {
    cy.visit('/iframe.html?id=layouts-column--two-colum');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'grid-cols-1')
      .and('have.class', 'md:grid-cols-2');
    cy.get('p').should('exist');
  });

  // Three Column
  it('Three Column Test', () => {
    cy.visit('/iframe.html?id=layouts-column--three-column');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'grid-cols-1')
      .and('have.class', 'md:grid-cols-3');
    cy.get('p').should('exist');
  });

  // Four Column
  it('Four Column Test', () => {
    cy.visit('/iframe.html?id=layouts-column--four-column');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'grid-cols-1')
      .and('have.class', 'md:grid-cols-2')
      .and('have.class', 'lg:grid-cols-4');
    cy.get('p').should('exist');
  });

  // One Third
  it('One Third Column Test', () => {
    cy.visit('/iframe.html?id=layouts-column--one-third');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'lg:grid-cols-3 lg:[&>*:last-child]:col-span-2');

    cy.get('p').should('exist');
  });

  // Two Third
  it('Two Third Column Test', () => {
    cy.visit('/iframe.html?id=layouts-column--two-third');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'lg:grid-cols-3 lg:[&>*:first-child]:col-span-2');
    cy.get('p').should('exist');
  });
});
export {};
