// UPDATE IFRAME URL
describe('Prose', () => {
  it('Does Prose exist?', () => {
    cy.visit('/iframe.html?id=component--Prose&viewMode=story');
    cy.get('h2').should('exist');
  });
});
export {};
