describe('Filter', () => {
  //default
  it('Should render the Filter', () => {
    cy.clearCookies();
    cy.visit('/iframe.html?id=components-filter--default');
    cy.get('h2').should('exist');
    cy.get('h3').should('exist');
    cy.get('button').should('exist');
    cy.get('span').should('exist');
    cy.get('svg').should('exist');
  });
});
export {};
