// UPDATE IFRAME URL
describe('DropDownPrev', () => {
  it('Does Button exist?', () => {
    cy.visit('/iframe.html?id=component--default&viewMode=story');
    cy.get('button').should('exist');
  });
});
export {};
