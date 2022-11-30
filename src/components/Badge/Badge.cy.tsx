describe('Badge', () => {
  const types = ['default', 'single-item-panel'];

  types.forEach(type => {
    it(`${type}: Should render the p`, () => {
      cy.visit(
        `${Cypress.env('baseUrl')}/iframe.html?id=components-elements--${type}`
      );
      cy.get(`p`).should('exist');
    });
  });
});
export {};
