describe('Marketplace', () => {
  //default
  it('Marketplace Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-marketplace--default');
    cy.get('img').should('exist');
    cy.get('h2')
      .should('exist')
      .contains('Marketplace item title');
    cy.get('a').should('have.attr', 'href');
    cy.get('p').should('exist');
  });

  //single item in panel panel
  it(' Single Marketplace in Panel ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-marketplace--single-item-panel'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get('img').should('exist');
  });

  // item list in panel and has shawdows
  it('Marketplace stack list with shadows ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-marketplace--stacked-list-panel'
    );
    cy.get(`.shadow-lg`).should('exist');
    cy.get('img').should('exist');
  });

  //with panel and panel title
  it('Marketplace stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-marketplace--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('h2').contains('Marketplace listing');
    cy.get('img').should('exist');
  });
});
export {};
