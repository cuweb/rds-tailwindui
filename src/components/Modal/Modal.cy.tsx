// UPDATE IFRAME URL
describe('Modal', () => {
  it('Does Modal exist?', () => {
    cy.visit('/iframe.html?id=components-modal--modal-default');
    cy.get('button')
      .contains('Click to Open Modal')
      .should('exist');
    cy.get('button')
      .contains('Click to Open Modal')
      .click();
    cy.get('h3').contains('Modal Title');
  });
});
export {};
