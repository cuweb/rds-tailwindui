describe('Search Bar ', () => {
  it('Does Search Bar  exist?', () => {
    cy.visit('/iframe.html?id=components-inputs-search--search-default');
    cy.get('#search-avatar').should('exist');
  });
});
export {};
