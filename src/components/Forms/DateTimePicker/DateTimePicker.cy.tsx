// UPDATE IFRAME URL
describe('Date Time Picker ', () => {
  it('Does Date Time Picker exist?', () => {
    cy.visit('/iframe.html?id=forms-date-time-picker--default');
    cy.get('div').should('exist');
    cy.get('select').should('exist');
    cy.get('option').should('exist');
    cy.get('span').should('exist');
  });
});
export {};
