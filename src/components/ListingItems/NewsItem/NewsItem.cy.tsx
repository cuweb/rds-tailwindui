describe('Marketplace', () => {
  //default
  it('NewsItem Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-news--default');
    cy.get('img').should('exist');
    cy.get('h3')
      .should('exist')
      .contains('News item title');
    cy.get('a').should('have.attr', 'href');
    cy.get('p').should('exist');
  });

  //single item in panel panel
  it(' Single NewsItem in Panel ', () => {
    cy.visit('/iframe.html?id=components-list-items-news--single-item-panel');
    cy.get(`.cu-panel`).should('exist');
    cy.get('img').should('exist');
  });

  // item list in panel and has shawdows
  it('NewsItem stack list with shadows ', () => {
    cy.visit('/iframe.html?id=components-list-items-news--stacked-list-panel');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('img').should('exist');
  });

  //with panel and panel title
  it('NewsItem stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-news--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('h2').contains('News listing');
    cy.get('img').should('exist');
  });
});
export {};
