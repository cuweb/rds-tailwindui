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
      tag: '.bg-cu-black-50',
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
  ];

  types.forEach((type) => {
    it(`Should render the ${type.name} button`, () => {
      cy.clearCookies();
      cy.visit(`/iframe.html?id=components-input-button--${type.component}`);
      cy.get('button').should('exist');
      cy.get(`${type.tag}`).should('exist');
    });
  });
});
export {};
