// UPDATE IFRAME URL
describe('Prose', () => {
  it('Does Aside exist?', () => {
    cy.visit('/iframe.html?id=layouts-aside--default');
    cy.get('aside').should('exist');
  });

  it('Is Aside sticky?', () => {
    cy.visit('/iframe.html?id=layouts-aside--is-sticky');
    cy.get('.sticky').should('exist');
  });
});
export {};
