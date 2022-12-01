// UPDATE IFRAME URL
describe('Banner', () => {
  it('Does Banner exist?', () => {
    cy.visit('/iframe.html?id=components-elements-banner--with-buttons');
    cy.get('#banner').should('exist');
    cy.get('button').should('exist');
  });

  it('Image Banner exist?', () => {
    cy.visit('/iframe.html?id=components-elements-banner--with-image');
    cy.get('#banner').should('exist');
    cy.get('img').should('exist');
  });
});

export {};
