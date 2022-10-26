describe('LinkItem', () => {
  //default
  it('LinkItem Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-links--default');
    cy.get('svg').should('exist');
    cy.get('h2')
      .should('exist')
      .contains('Job item title');
    cy.get('a').should('have.attr', 'href');
  });

  //single item in panel panel
  it(' Single LinkItem in Panel ', () => {
    cy.visit('/iframe.html?id=components-list-items-links--single-item-panel');
    cy.get(`.cu-panel`).should('exist');
  });

  // item list in panel and has shawdows
  it('LinkItem stack list with shadows ', () => {
    cy.visit('/iframe.html?id=components-list-items-links--stacked-list-panel');
    cy.get(`.shadow-lg`).should('exist');
  });

  //with panel and panel title
  it('LinkItem stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-links--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('h2').contains('Link listing');
  });
});
export {};
