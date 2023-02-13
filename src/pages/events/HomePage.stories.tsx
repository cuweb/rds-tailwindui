import React from 'react';
import { Meta } from '@storybook/react';
// import { Aside, Column, Container, Main } from '../../layouts';
import { TopNav, Banner } from '../../components';

export default {
  title: 'Page Templates/Events',
  argTypes: {
    bgColor: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const EventsHomepage = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Article Template" />

    <main>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
      </p>
    </main>
  </>
);
