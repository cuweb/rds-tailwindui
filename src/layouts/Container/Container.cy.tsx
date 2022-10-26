describe('Container', () => {
  //default
  it(' Container Default with White Background ', () => {
    cy.visit('/iframe.html?id=layouts-container--default');
    cy.get('div')
      .should('have.class', 'cu-container')
      .and('have.class', 'bg-white');
    cy.get('p').contains('Empty Container');
  });

  //Container with grey Background
  it(' Container Grey background', () => {
    cy.visit('/iframe.html?id=layouts-container--grey-background');
    cy.get('div')
      .should('have.class', 'cu-container')
      .and('have.class', 'bg-cu-black-50');
    cy.get('p').contains('Grey Container');
  });

  //Container with two column
  it('Container with two column ', () => {
    cy.visit('/iframe.html?id=layouts-container--with-two-columns');
    cy.get('div')
      .should('have.class', 'cu-container')
      .and('have.class', 'bg-cu-black-50');
    cy.get('div')
      .should('have.class', 'cu-column')
      .and('have.class', 'md:grid-cols-2');
  });

  //layouts-container--with-panels
  it('Container with two column Panel', () => {
    cy.visit('/iframe.html?id=layouts-container--with-panels');
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
