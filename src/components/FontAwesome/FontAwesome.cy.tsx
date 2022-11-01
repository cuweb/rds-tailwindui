describe('FontAwesome', () => {
  //default
  it('Should render the icon', () => {
    cy.clearCookies();
    cy.visit(`/iframe.html?id=components-icons-fontawesome`);
    cy.get('svg').should('exist');
  });
});
export {};
