describe('Cards', () => {
  it('Card Default exist?', () => {
    cy.visit('/iframe.html?id=components-cards-numbers--default');
    cy.get('h3').should(
      'have.text',
      'End-of-Year Reflections and Resolutions for Our Web Services Team'
    );
  });
});
export {};
