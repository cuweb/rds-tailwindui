// UPDATE IFRAME URL
describe('Location', () => {
  it('Location Default exist?', () => {
    cy.visit('/iframe.html?id=components-location--default');
    cy.get('div').should('exist');
    cy.get('a').should('have.attr', 'href');
  });
});
export {};
