// UPDATE IFRAME URL
describe('EventLoader', () => {
  it('Does EventLoader exist?', () => {
    cy.visit('/iframe.html?id=components-loaders-card-loader--default');
    cy.get('.animate-pulse').should('exist');
    cy.get('span').should('exist');
  });
});
export {};
