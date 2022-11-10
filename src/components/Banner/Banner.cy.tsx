// UPDATE IFRAME URL
describe('Banner', () => {
  it('Does Banner exist?', () => {
    cy.visit('/iframe.html?id=component--Banner&viewMode=story');
    cy.get('h1').should('exist');
  });
});
export {};
