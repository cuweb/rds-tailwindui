import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, FooterStandard } from '../../components';

export default {
  title: 'Page Templates/Intranet',
  argTypes: {
    bgColor: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Homepage = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Template" />
    <FooterStandard />
  </>
);
