// UPDATE IFRAME URL
describe('Share', () => {
  it('Does Social Share exist?', () => {
    cy.visit('/iframe.html?id=components-elements-socialshare--default');
    cy.get('button')
      .should('exist')
      .contains('Share Event');
    cy.get('.sr-only').should('exist');
  });
});
export {};
