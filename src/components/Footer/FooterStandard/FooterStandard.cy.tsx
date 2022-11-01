// UPDATE IFRAME URL
describe('Footer', () => {
  it('Does Footer exist?', () => {
    cy.visit('/iframe.html?id=footer-standard--default&viewMode=story');
    cy.get('footer').should('exist');
    cy.get('h3').should('exist');
    cy.get('p').should('exist');
    cy.get('ul')
      .should('exist')
      .contains('lli');
    cy.get('a')
      .should('exist')
      .should('have.attr', 'href');
    cy.get('svg').should('exist');
  });
});
export {};
