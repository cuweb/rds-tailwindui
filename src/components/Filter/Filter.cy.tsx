describe('Filter', () => {
  //default
  it('Default Filter exist?', () => {
    cy.visit('/iframe.html?id=components-filter--default');
    cy.get('button').should('exist');
    cy.get('h2').should('exist');
    cy.get('h3').should('exist');
    cy.get('span').should('exist');
  });
});
export {};
