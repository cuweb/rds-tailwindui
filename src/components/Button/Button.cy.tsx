describe('Button', () => {
  it('Does Button exsist?', () => {
    cy.visit('/iframe.html?id=input-button--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
