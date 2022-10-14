describe('FileItem', () => {
  //default
  it('FileItem Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-files--default');
    cy.get('svg').should('exist');
    cy.get('h2')
      .should('exist')
      .contains('File item title');
    cy.get('p').should('exist');
    cy.get('a').should('have.attr', 'href');
  });

  //single item in panel  panel
  it(' Single FileItem in Panel ', () => {
    cy.visit('/iframe.html?id=components-list-items-files--single-item-panel');
    cy.get(`.cu-panel`).should('exist');
  });

  // item list in panel and has shawdows
  it('FileItem  stack list with shadows ', () => {
    cy.visit('/iframe.html?id=components-list-items-files--stacked-list-panel');
    cy.get(`.shadow-lg`).should('exist');
  });

  //with panel and panel title
  it('FileItem  stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-files--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get(`.shadow-lg`).should('exist');
    cy.get('h2').contains('File listing');
  });
});
export {};
