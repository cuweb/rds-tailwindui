describe('Search Bar ', () => {
  it('Does Search Bar  exist?', () => {
    cy.visit('/iframe.html?id=components-input-search--search-default');
    cy.get('#search-bar').should('exist');
    cy.get('svg').should('exist');
  });
});
export {};
