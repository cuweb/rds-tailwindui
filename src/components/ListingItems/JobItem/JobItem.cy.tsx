describe('JobItem', () => {
  //default
  it('JobItem Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-jobs--default');
    cy.get('svg').should('exist');
    cy.get('h2').should('exist').contains('Job item title');
    cy.get('p').should('exist');
    cy.get('a').should('have.attr', 'href');
  });

  //single item in panel panel
  it(' Single JobItem in Panel ', () => {
    cy.visit('/iframe.html?id=components-list-items-jobs--single-item-panel');
    cy.get(`.cu-panel`).should('exist');
  });

  // item list in panel and has shawdows
  it('JobItem stack list with shadows ', () => {
    cy.visit('/iframe.html?id=components-list-items-jobs--stacked-list-panel');
    cy.get(`.shadow-lg`).should('exist');
  });

  //with panel and panel title
  it('JobItem stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-jobs--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('h2').contains('Job listing');
  });
});
export {};
