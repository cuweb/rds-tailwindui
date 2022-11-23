// UPDATE IFRAME URL
describe('Prose', () => {
  it('Does Prose exist?', () => {
    cy.visit('/iframe.html?id=components-typography-prose--article');
    cy.get('.prose').should('exist');
    cy.get('img').should('have.css', 'border-radius', '8px');
  });
});
export {};
