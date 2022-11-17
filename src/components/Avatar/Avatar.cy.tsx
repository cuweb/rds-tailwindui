describe('Avatar', () => {
  it(`Should render Avatar Image`, () => {
    cy.visit(`/iframe.html?id=components-elements-avatar--default`);
    cy.get(`img`).should('exist');
  });

  it(`Should render rounded Avatar`, () => {
    cy.visit(`/iframe.html?id=components-elements-avatar--rounded`);
    cy.get(`.rounded-lg`).should('exist');
  });

  // it(`Should render no border`, () => {
  //   cy.visit(`/iframe.html?id=components-elements-avatar--rounded-no-border`);
  //   cy.get(`.ring-2`).should('not.exist');
  // });

  it(`Should render Initial for No Image `, () => {
    cy.visit(`/iframe.html?id=components-elements-avatar--no-image`);
    cy.get(`div`).contains('DB');
  });

  it(`Should render all the sizes`, () => {
    cy.visit(`/iframe.html?id=components-elements-avatar--sizes`);
    cy.get(`.text-xs`).should('exist');
    cy.get(`.text-base`).should('exist');
    cy.get(`.text-lg`).should('exist');
    cy.get(`.text-2xl`).should('exist');
    cy.get(`.text-4xl`).should('exist');
  });

  it(`Should render alert when Clicked -- Handle Click `, () => {
    cy.visit(`/iframe.html?id=components-elements-avatar--default`);
    cy.get('[alt="Avatar of Danny Brown"]').click();
    cy.on('window:alert', str => {
      expect(str).to.contains(`I am an alert`);
      return false;
    });
  });
});

export {};
