import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, FooterStandard } from '../../components';
import { Column, Container, Main } from '../../layouts';

export default {
  title: 'Projects/Intranet',
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

    <Main>
      <Container as="section" hasProse maxWidth="7xl">
        <p>safhasufhasiuo</p>

        <Column cols="2/3" maxWidth="7xl">
          <Container as="article" hasProse>
            <p>safhasufhasiuo</p>
          </Container>
        </Column>

        <Column cols="2/3" maxWidth="7xl">
          <Container as="article" hasProse>
            <p>safhasufhasiuo</p>
          </Container>
        </Column>

        <Container bgColor="grey" as="div">
          <p>safhasufhasiuo</p>
        </Container>

        <Column cols="2/3" maxWidth="7xl">
          <Container as="article" hasProse>
            <p>safhasufhasiuo</p>
          </Container>
        </Column>

        <Container as="div" bgColor="grey">
          <p>safhasufhasiuo</p>
        </Container>
      </Container>
    </Main>

    <FooterStandard />
  </>
);
