describe('Search Form ', () => {
  it('Does Search Bar  exist?', () => {
    cy.visit('/iframe.html?id=components-searchform--default');
    cy.get(`input`).should('exist');
  });
});
export {};
