describe('Pagination', () => {
  //default
  it('Should render the Pagination', () => {
    cy.clearCookies();
    cy.visit('/iframe.html?id=components-inputs-pagination--default');
    cy.get('p').should('exist');
    cy.get('span').should('exist');
    cy.get('nav').should('exist');
    cy.get('ul').should('exist');
    cy.get('li').should('exist');
  });
});
export {};
