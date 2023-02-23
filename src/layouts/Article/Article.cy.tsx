describe('Article', () => {
  //default
  it(' Article Default with transparent Background ', () => {
    cy.visit('/iframe.html?id=layouts-article--default');
    cy.get('div')
      .should('have.class', 'cu-article')
      .and('have.class', 'bg-transparent');
    cy.get('p').contains('Empty Article');
  });

  //Article with grey Background
  it(' Article Grey background', () => {
    cy.visit('/iframe.html?id=layouts-article--grey-background');
    cy.get('div')
      .should('have.class', 'cu-article')
      .and('have.class', 'bg-cu-black-50');
    cy.get('p').contains('Grey Article');
  });

  //Article with two column
  it('Article with two column ', () => {
    cy.visit('/iframe.html?id=layouts-article--with-two-columns');
    cy.get('div')
      .should('have.class', 'cu-article')
      .and('have.class', 'bg-cu-black-50');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'md:grid-cols-2');
  });

  //layouts-article--with-panels
  it('Article with two column Panel', () => {
    cy.visit('/iframe.html?id=layouts-article--with-panel-grid');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'md:grid-cols-2');
    cy.get('div')
      .should('have.class', 'cu-panel')
      .and('have.class', 'shadow-lg');
    cy.get('h2').contains('Panel Header');
  });
});
export {};
