describe('PlacesAutocomplete', () => {
  it('PlacesAutocomplete Default exist?', () => {
    cy.visit('/iframe.html?id=forms-placesautocomplete--default');
    cy.get('input').should('exist');
    cy.get('[role="combobox"]').should('exist');
  });
});
export {};
