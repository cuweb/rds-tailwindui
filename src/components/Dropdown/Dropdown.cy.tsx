// UPDATE IFRAME URL
describe('DropDown', () => {
  it('Does Button exist?', () => {
    cy.visit('/iframe.html?id=component--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
