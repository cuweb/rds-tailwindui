// UPDATE IFRAME URL
describe('Share', () => {
  it('Does Social Share exist?', () => {
    cy.visit('/iframe.html?id=component--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
