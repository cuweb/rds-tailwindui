// UPDATE IFRAME URL
describe('DropDown', () => {
  it('Does DropDown exist?', () => {
    cy.visit('/iframe.html?id=component--dropdown&viewMode=story');
    cy.get('div').should('exist');
    cy.get('sr-only').should('exist');
    cy.get('p').should('exist');
    cy.get('svg').should('exist');
  });

  it('Button component inside dropdown', () => {
    cy.visit('/iframe.html?id=components-dropdown-button&viewMode=story');
    cy.get('sr-only').should('exist');
    cy.get(`div`).should('exist');
    cy.get(`button`).should('exist');
  });

  it('Button component with arrow inside dropdown', () => {
    cy.visit('/iframe.html?id=components-dropdown-button&viewMode=story');
    cy.get('sr-only').should('exist');
    cy.get(`div`).should('exist');
    cy.get(`svg`).should('exist');
    cy.get(`button`).should('exist');
  });

  it('Icon component inside dropdown', () => {
    cy.visit('/iframe.html?id=components-dropdown-button&viewMode=story');
    cy.get('sr-only').should('exist');
    cy.get(`div`).should('exist');
    cy.get(`svg`).should('exist');
  });
});
export {};
