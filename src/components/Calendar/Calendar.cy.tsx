describe('Filter', () => {
  //default
  it('Default Filter exist?', () => {
    cy.visit('/iframe.html?id=components-calendar--default');
    cy.get('button').should('exist');
    cy.get('h2').should('exist');
    cy.get('li').should('exist');
    cy.get('span').should('exist');
    cy.get('p').should('exist');
  });
});
export {};
