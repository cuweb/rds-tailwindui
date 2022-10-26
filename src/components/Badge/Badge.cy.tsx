describe('Badge', () => {
  const types = ['default', 'single-item-panel'];

  types.map((type) => {
    it(`${type}: Should render the p`, () => {
      cy.visit(
        `${Cypress.env('baseUrl')}/iframe.html?id=components-badge--${type}`
      );
      cy.get(`p`).should('exist');
    });
  });
});
export {};
