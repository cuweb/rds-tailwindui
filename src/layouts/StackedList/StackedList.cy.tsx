describe('Panel', () => {
  //default
  it('Panel Default', () => {
    cy.visit('/iframe.html?id=layouts-panel--default');
    cy.get('div').should('have.class', 'cu-panel');
    cy.get('p').should('exist');
  });

  // Panel with Border
  it('Panel with Border', () => {
    cy.visit('/iframe.html?id=layouts-panel--with-border');
    cy.get('div')
      .should('have.class', 'cu-panel')
      .and('have.class', 'border')
      .and('have.class', 'border-cu-black-100');
    cy.get('p').should('exist');
  });

  // Panel with Shadows
  it('Panel with  Shadows', () => {
    cy.visit('/iframe.html?id=layouts-panel--with-shadow');
    cy.get('div')
      .should('have.class', 'cu-panel')
      .and('have.class', 'shadow-lg');
    cy.get('p').should('exist');
  });
  // Panel with Border and Shadows
  it('Panel with Border and Shadows', () => {
    cy.visit('/iframe.html?id=layouts-panel--shadow-and-border');
    cy.get('div')
      .should('have.class', 'cu-panel')
      .and('have.class', 'border')
      .and('have.class', 'border-cu-black-100')
      .and('have.class', 'shadow-lg');
    cy.get('p').should('exist');
  });
  // Panel with Title
  it('Panel with Title', () => {
    cy.visit('/iframe.html?id=layouts-panel--with-title');
    cy.get('div').should('have.class', 'cu-panel');
    cy.get('h2').contains('Panel Title');
  });
});
export {};
