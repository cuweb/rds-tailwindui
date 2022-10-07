describe('Button', () => {
  it('Does Button exist?', () => {
    cy.visit('/iframe.html?id=panel--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
