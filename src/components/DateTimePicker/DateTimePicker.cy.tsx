// UPDATE IFRAME URL
describe('Button', () => {
  it('Does Button exist?', () => {
    cy.visit('/iframe.html?id=components-elements-datetimepicker--default');
    cy.get('div').should('exist');
    cy.get('select').should('exist');
    cy.get('option').should('exist');
    cy.get('span').should('exist');
  });
});
export {};
