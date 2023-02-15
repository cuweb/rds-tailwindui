describe('Cards', () => {
  it('Card Default exist?', () => {
    cy.visit('/iframe.html?id=components-cards-numbers--default');
    cy.get('p').should('exist');
  });
});
export {};
