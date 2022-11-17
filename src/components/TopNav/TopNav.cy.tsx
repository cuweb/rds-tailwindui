describe('Top Nav', () => {
  it('Does Navigation  exist?', () => {
    cy.visit('/iframe.html?id=components-navigation-topnav--default');
    cy.get('#topNav').should('exist');
  });
});
export {};
