describe('FeedItems', () => {
  //default
  it('FeedItems Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-feeds--default');
    cy.get('h2').should('exist').contains('Feed item title');
    cy.get('p').should('exist');
    cy.get('a').should('have.attr', 'href');
  });

  //single item in panel panel
  it(' Single FeedItems in Panel ', () => {
    cy.visit('/iframe.html?id=components-list-items-feeds--single-item-panel');
    cy.get(`.cu-panel`).should('exist');
  });

  // item list in panel and has shawdows
  it('FeedItems stack list with shadows ', () => {
    cy.visit('/iframe.html?id=components-list-items-feeds--stacked-list-panel');
    cy.get(`.shadow-lg`).should('exist');
  });

  //with panel and panel title
  it('FeedItems stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-feeds--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('h2').contains('News feed listing');
  });
});
export {};
