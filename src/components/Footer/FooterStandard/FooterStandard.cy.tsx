// UPDATE IFRAME URL
describe('Footer', () => {
  it('Does Footer exist?', () => {
    cy.visit('/iframe.html?id=footers-standard--default');
    cy.get('footer').should('exist');
    cy.get('h3').should('exist');
    cy.get('p').should('exist');
    cy.get('ul').should('exist');
    cy.get('a')
      .should('exist')
      .should('have.attr', 'href');
    cy.get('svg').should('exist');
  });
});
export {};
