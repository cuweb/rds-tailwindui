describe('PlacesAutocomplete', () => {
  it('PlacesAutocomplete Default exist?', () => {
    cy.visit('/iframe.html?id=components-elements-placesautocomplete--default');
    cy.get('input').should('exist');
    cy.get('[role="combobox"]').should('exist');
  });
});
export {};
