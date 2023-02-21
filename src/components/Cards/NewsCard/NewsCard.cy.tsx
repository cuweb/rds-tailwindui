describe('Cards', () => {
  //default
  it('Card Default exist?', () => {
    cy.visit('/iframe.html?id=cards-lists-news-card--default');
    cy.get('h3').should(
      'have.text',
      'End-of-Year Reflections and Resolutions for Our Web Services Team'
    );
    cy.get('a').should('have.attr', 'href');
  });
});
export {};
