describe('HeroIcon', () => {
  //default
  it('Should render the icon', () => {
    cy.clearCookies();
    cy.visit(`/iframe.html?id=components-icons-heroicon`);
    cy.get('svg').should('exist');
  });
});
export {};
