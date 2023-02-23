// UPDATE IFRAME URL
describe('Banner', () => {
  it('Does Banner exist?', () => {
    cy.visit('/iframe.html?id=headers-banner--with-buttons');
    cy.get('#banner').should('exist');
    cy.get('button').should('exist');
  });

  it('Image Banner exist?', () => {
    cy.visit('/iframe.html?id=headers-banner--with-image');
    cy.get('#banner').should('exist');
    cy.get('img').should('exist');
  });
});

export {};
