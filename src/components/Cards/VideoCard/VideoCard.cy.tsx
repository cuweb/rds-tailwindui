describe('VideoCard', () => {
  it('VideoCard Default exist?', () => {
    cy.visit('/iframe.html?id=components-elements-videocard--defaultt');
    cy.get('video').should('exist');
    cy.get('p').should('exist');
  });
});
export {};
