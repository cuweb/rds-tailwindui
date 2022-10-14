describe('Events', () => {
  //default
  it('Event Default exist?', () => {
    cy.visit('/iframe.html?id=components-list-items-events--default');
    cy.get('h2').should('have.text', 'Event item title');
    cy.get('ul').should('exist');
    cy.get('a').should('have.attr', 'href');
  });

  //with shawdows and panel
  it('Event stack list with shadows ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-events--stacked-list-panel'
    );
    cy.get(`.shadow-lg`).should('exist');
  });

  //with panel and panel title
  it('Event stack list with title ', () => {
    cy.visit(
      '/iframe.html?id=components-list-items-events--stacked-list-panel-title'
    );
    cy.get(`.cu-panel`).should('exist');
    cy.get('h2').should('have.text', 'Event listing');
  });
});
export {};
