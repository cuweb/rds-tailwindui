describe('Search Bar ', () => {
  it('Does Search Bar  exist?', () => {
    cy.visit('/iframe.html?id=components-inputs-search--search-default');
    cy.get('button').should('exist');
  });
});
export {};
