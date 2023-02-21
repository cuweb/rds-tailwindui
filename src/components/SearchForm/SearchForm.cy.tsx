describe('Search Form ', () => {
  it('Does Search Bar  exist?', () => {
    cy.visit('/iframe.html?id=components-search-form--default');
    cy.get(`input`).should('exist');
  });
});
export {};
