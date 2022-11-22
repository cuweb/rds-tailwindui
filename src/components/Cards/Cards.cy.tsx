describe('Cards', () => {
  //default
  it('Card Default exist?', () => {
    cy.visit('/iframe.html?id=components-elements-cards--default');
    cy.get('h3').should('have.text', 'Lived Experience Luncheon Series with Dr. Alex Auerbach');
    cy.get('li').should('exist');
    cy.get('a').should('have.attr', 'href');
  });

  //with shawdows and panel
  it('Grid of cards ', () => {
    cy.visit(
      '/iframe.html?id=components-elements-cards--grid-cards'
    );
    cy.get(`li`).should('exist');
  });
});
export {};