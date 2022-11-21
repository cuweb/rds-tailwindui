// UPDATE IFRAME URL
describe('DropDown', () => {
  it('Does DropDown exist?', () => {
    cy.visit('/iframe.html?id=components-inputs-drop-down--default');
    cy.get('div').should('exist');
    cy.get('.cursor-pointer').should('exist');
    cy.get('.sr-only').should('exist');
    cy.get('p').should('exist');
    cy.get('svg').should('exist');
  });

  it('Button component inside dropdown', () => {
    cy.visit('/iframe.html?id=components-inputs-drop-down--with-button');
    cy.get('.sr-only').should('exist');
    cy.get(`div`).should('exist');
    cy.get(`button`).should('exist');
  });

  it('Button component with arrow inside dropdown', () => {
    cy.visit('/iframe.html?id=components-inputs-drop-down--with-button-arrow');
    cy.get('.sr-only').should('exist');
    cy.get(`div`).should('exist');
    cy.get(`svg`).should('exist');
    cy.get(`button`).should('exist');
  });

  it('Icon component inside dropdown', () => {
    cy.visit('/iframe.html?id=components-inputs-drop-down--with-hero-icon');
    cy.get('.sr-only').should('exist');
    cy.get(`div`).should('exist');
    cy.get(`svg`).should('exist');
  });
});
export {};
