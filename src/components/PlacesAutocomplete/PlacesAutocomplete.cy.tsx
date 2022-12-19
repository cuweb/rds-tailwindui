describe('PlacesAutocomplete', () => {
  it('PlacesAutocomplete Default exist?', () => {
    cy.visit('/iframe.html?id=components-elements-placesautocomplete--default');
    cy.get('Combobox').should('exist');
    cy.get('div').should('exist');
  });
});
export {};
