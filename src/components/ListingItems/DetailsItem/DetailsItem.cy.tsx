describe('Details', () => {
  //default
  it('DetailssItem Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-details--default');
    cy.get('svg').should('exist');
    cy.get('h3')
      .should('exist')
      .contains('Details item title');
    cy.get('a').should('have.attr', 'href');
    cy.get('p').should('exist');
  });

  //single item in panel panel
  it(' Single DetailsItem in Panel ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-details--single-item-panel'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get('svg').should('exist');
  });

  // item list in panel and has shawdows
  it('DetailsItem stack list with shadows ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-details--stacked-list-panel'
    );
    cy.get(`.shadow-lg`).should('exist');
    cy.get('svg').should('exist');
  });

  //with panel and panel title
  it('DetailsItem stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-details--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('h2').contains('Details listing');
    cy.get('svg').should('exist');
  });
});
export {};
