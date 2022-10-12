// UPDATE IFRAME URL
describe('Button', () => {
  it('Does Button exist?', () => {
    cy.visit('/iframe.html?id=linkitem--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
