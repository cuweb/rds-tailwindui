describe('Filter', () => {
  //default
  it('Default Filter exist?', () => {
    cy.visit('/iframe.html?id=components-input-calendar--default');
    cy.get('button').should('exist');
    cy.get('h2').should('exist');
    cy.get('ol').should('exist');
    cy.get('li').should('exist');
    cy.get('span').should('exist');
    cy.get('p').should('exist');
    cy.get('section').should('exist');
  });
});
export {};
