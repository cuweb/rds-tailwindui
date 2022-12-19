// UPDATE IFRAME URL
describe('Prose', () => {
  it('Does Main exist?', () => {
    cy.visit('/iframe.html?id=layouts-main--default');
    cy.get('main').should('exist');
  });

  it('Does main have spacing?', () => {
    cy.visit('/iframe.html?id=layouts-main--with-spacing');
    cy.get('.py-10').should('exist');
    cy.get('.px-6').should('exist');
  });

  it('Does main overlap banner?', () => {
    cy.visit('/iframe.html?id=layouts-main--with-overlap');
    cy.get('.relative').should('exist');
    cy.get('.z-20').should('exist');
    cy.get('.-mt-20').should('exist');
  });
});
export {};
