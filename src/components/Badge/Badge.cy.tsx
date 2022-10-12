describe('Button', () => {
  it('Does Button exist?', () => {
    cy.visit('/iframe.html?id=badge--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
