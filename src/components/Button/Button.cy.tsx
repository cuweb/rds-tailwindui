describe('Button', () => {
  it('Does Button exist?', () => {
    cy.visit(
      `${Cypress.env(
        'baseUrl'
      )}/iframe.html?id=components-input-button--default`
    );
    cy.get('button').should('exist');
    cy.contains('Storybook Button');
  });
});
export {};
