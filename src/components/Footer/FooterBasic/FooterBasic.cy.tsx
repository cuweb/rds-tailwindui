// UPDATE IFRAME URL
describe('Footer', () => {
  it('Does Footer exist?', () => {
    cy.visit('/iframe.html?id=components-footer-footer-basic--default');
    cy.get('footer').should('exist');
    cy.get('ul').should('exist');
    cy.get('a')
      .should('exist')
      .should('have.attr', 'href');
  });
});
export {};
