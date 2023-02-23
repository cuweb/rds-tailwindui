describe('HeroIcon', () => {
  //default
  it('Should render the icon', () => {
    cy.clearCookies();
    cy.visit(`/iframe.html?id=components-heroicon--default`);
    cy.get('svg').should('exist');
  });
});
export {};
