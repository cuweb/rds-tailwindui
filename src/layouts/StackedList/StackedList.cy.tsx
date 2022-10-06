describe('Stacked List', () => {
  //default
  it('Stacked List Default', () => {
    cy.visit('/iframe.html?id=layouts-stacked-list--default');
    cy.get('li').should('exist');
  });
  //with-dividers
  it('Stacked List with dividers', () => {
    cy.visit('/iframe.html?id=layouts-stacked-list--with-dividers');
    cy.get('ul').should('have.class', '[&>li]:border-cu-cu-black-50');
  });
  //panel-and-dividers
  it('Stacked List panel and dividers', () => {
    cy.visit('/iframe.html?id=layouts-stacked-list--panel-and-dividers');
    cy.get('ul').should('have.class', '[&>li]:border-cu-cu-black-50');
    cy.get('div')
      .should('have.class', 'cu-panel')
      .and('has.class', 'shadow-lg');
  });
  //with-feed-item
  it('Stacked List Item Component', () => {
    cy.visit('/iframe.html?id=layouts-stacked-list--with-feed-item');
    cy.get('li').should('exist');
    cy.get('a').should('exist');
  });
});
