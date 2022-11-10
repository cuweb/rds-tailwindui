describe('Search Bar ', () => {
  it('Does Search Bar  exist?', () => {
    cy.visit('/iframe.html?id=components-input-search--search-default');
    cy.get('#search-avatar').should('exist');
  });
});
export {};
