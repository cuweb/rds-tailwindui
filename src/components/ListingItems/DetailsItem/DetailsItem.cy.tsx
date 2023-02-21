describe('Details', () => {
  //default
  it('DetailssItem Default exist?', () => {
    cy.visit('/iframe.html?id=cards-lists-details-list-item--default');
    cy.get('svg').should('exist');
    cy.get('h3').should('exist');

    cy.get('p').should('exist');
  });

  //single item in panel panel
  it(' Single DetailsItem in Panel ', () => {
    cy.visit('/iframe.html?id=cards-lists-details-list-item--single-item-list');
    cy.get('svg').should('exist');
  });

  //with panel and panel title
  it('DetailsItem stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=cards-lists-details-list-item--stacked-list-panel-title'
    );
    cy.get('h2').contains('Details listing');
    cy.get('svg').should('exist');
  });
});
export {};
