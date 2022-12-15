// UPDATE IFRAME URL
describe('Check Table Render', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-elements-table--default');
  });

  it('Does table exist', () => {
    cy.get('table').should('exist');
  });

  it('Does table have headings', () => {
    cy.get('th')
      .first()
      .should('exist');
  });

  it('Does table have rows', () => {
    cy.get('th')
      .first()
      .should('exist');
  });
});

describe('Check if sorting works', () => {
  beforeEach(() => {
    cy.visit(`/iframe.html?id=components-elements-table--default`);
  });

  it('Test Column Sort', () => {
    cy.get('#root th')
      .eq(0)
      .should('be.visible')
      .click();

    cy.get('#root th')
      .eq(0)
      .invoke('attr', 'aria-sort')
      .should('eq', 'descending');

    cy.get('#root table tr td')
      .eq(0)
      .should('have.text', '1');

    cy.get('#root th')
      .eq(0)
      .should('be.visible')
      .click();

    cy.get('#root th')
      .eq(0)
      .invoke('attr', 'aria-sort')
      .should('eq', 'ascending');

    cy.get('#root table tr td')
      .eq(0)
      .should('have.text', '5');

    cy.get('#root th')
      .eq(1)
      .should('be.visible')
      .click();

    cy.get('#root table tr td')
      .eq(1)
      .should('have.text', 'Aitle 5');

    cy.get('#root th')
      .eq(1)
      .invoke('attr', 'aria-sort')
      .should('eq', 'descending');

    cy.get('#root th')
      .eq(1)
      .should('be.visible')
      .click();

    cy.get('#root table tr td')
      .eq(1)
      .should('have.text', 'Title 4');

    cy.get('#root th')
      .eq(1)
      .invoke('attr', 'aria-sort')
      .should('eq', 'ascending');
  });
});

export {};
