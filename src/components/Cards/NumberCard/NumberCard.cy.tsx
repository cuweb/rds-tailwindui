describe('Cards', () => {
  it('Card Default exist?', () => {
    cy.visit('/iframe.html?id=cards-lists-numbers-card--default');
    cy.get('p').should('exist');
  });
});
export {};
