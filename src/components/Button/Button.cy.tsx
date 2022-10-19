// describe('Button', () => {
//   it('Default Button', () => {
//     cy.visit('/iframe.html?id=components-input-button--default');
//     cy.get('button').should('exist');
//     cy.get('.bg-cu-red').click();
//   });
//   it('Ghost Button', () => {
//     cy.visit('/iframe.html?id=components-input-button--ghost-button');
//     cy.get('button').should('exist');
//   });
//   it('Grey Button', () => {
//     cy.visit('/iframe.html?id=components-input-button--grey-button');
//     cy.get('button').should('exist');
//   });
//   it('White Button', () => {
//     cy.visit('/iframe.html?id=components-input-button--white-button');
//     cy.get('button').should('exist');
//   });
//   it('Full Width', () => {
//     cy.visit('/iframe.html?id=components-input-button--full-width');
//     cy.get('button').should('exist');
//   });
//   it('centered button', () => {
//     cy.visit('/iframe.html?id=components-input-button--centered-button');
//     cy.get('button').should('exist');
//   });
//   it('Icon text button', () => {
//     cy.visit('/iframe.html?id=components-input-button--icon-text-button');
//     cy.get('button').should('exist');
//   });
//   it('Icon button', () => {
//     cy.visit('/iframe.html?id=components-input-button--icon-button');
//     cy.get('button').should('exist');
//   });
//   it('Disabled button', () => {
//     cy.visit('/iframe.html?id=components-input-button--disabled-button');
//     cy.get('button').should('exist');
//   });
// });
// export {};

describe('Button', () => {
  const types = [
    {
      name: 'Default',
      component: 'default',
      tag: '.bg-cu-red',
    },
    {
      name: 'Ghost',
      component: 'ghost-button',
      tag: '.border-cu-red',
    },
    {
      name: 'Grey',
      component: 'grey-button',
      tag: '.bg-slate-100',
    },
    {
      name: 'White',
      component: 'white-button',
      tag: '.bg-white',
    },
    {
      name: 'Full Width',
      component: 'full-width',
      tag: '.w-full',
    },
    {
      name: 'Centered',
      component: 'centered-button',
      tag: '.relative',
    },
    {
      name: 'Icon Text',
      component: 'icon-text-button',
      tag: 'svg',
      custom: '',
    },
    {
      name: 'Icon',
      component: 'icon-button',
      tag: 'svg',
    },
    {
      name: 'Disabled',
      component: 'disabled-button',
      tag: '.false',
    },
  ];

  types.map(type => {
    it(`Should render the ${type.name} button`, () => {
      cy.clearCookies();
      cy.visit(`/iframe.html?id=components-input-button--${type.component}`);
      cy.get('button').should('exist');
      cy.get(`${type.tag}`).should('exist');
    });
  });
});
export {};
