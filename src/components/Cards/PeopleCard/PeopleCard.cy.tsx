// UPDATE IFRAME URL
describe('PeopleCard', () => {
  it('people card exists ', () => {
    cy.visit('/iframe.html?id=components-cards-people--default');
    cy.get('.rounded-full').should('exist');
    cy.get('img').should('exist');
  });
});
export {};
