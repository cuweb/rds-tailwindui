describe('Top Nav', () => {
  it('Does Navigation  exist?', () => {
    cy.visit('/iframe.html?id=headers-top-nav--default');
    cy.get('#topNav').should('exist');
  });
});
export {};
