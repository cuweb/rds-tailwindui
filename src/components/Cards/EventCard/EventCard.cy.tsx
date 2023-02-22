describe('Cards', () => {
  //default
  it('Card Default exist?', () => {
    cy.visit('/iframe.html?id=cards-lists-events-card--default');
    cy.get('h3').should(
      'have.text',
      'Lived Experience Luncheon Series with Dr. Alex Auerbach'
    );
    cy.get('li').should('exist');
    cy.get('a').should('have.attr', 'href');
  });
});
export {};
