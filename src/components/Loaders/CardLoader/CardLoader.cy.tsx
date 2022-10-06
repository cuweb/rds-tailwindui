// UPDATE IFRAME URL
describe('CardLoader', () => {
  it('Does CardLoader exist?', () => {
    cy.visit('/iframe.html?id=components-loaders-card-loader--default');
    cy.get('.animate-pulse').should('exist');
    cy.get('span').should('have.css', 'display', 'block');
  });
});
export {};
