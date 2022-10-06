describe('Button', () => {
  it('Does Button exist?', () => {
    cy.visit('/iframe.html?id=stackedlist--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
