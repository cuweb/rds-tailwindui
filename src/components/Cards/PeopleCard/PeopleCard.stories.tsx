import React, { Component } from 'react';
import { Meta, Story } from '@storybook/react';
import { PeopleCard, PeopleCardProps } from './PeopleCard';
import { Column } from '../../../layouts';

export default {
  title: 'Components/Cards/People',
  component: PeopleCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Component>;

const DefaultTemplate: Story<PeopleCardProps> = args => (
  <PeopleCard {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  firstName: 'Carleton',
  lastName: 'Banks',
  email: 'george.hadjisophocleous@carleton.ca',
  phoneNumber: ' 613-520-2600 x1234',
  tags: {
    category: [
      {
        id: 1,
        name: 'Breaking News',
        slug: 'breaking-news',
      },
      {
        id: 2,
        name: 'Headline',
        slug: 'headline',
      },
    ],
  },
  designation: 'Manager',
  profileImage:
    'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
};

export const NoProfileImage = DefaultTemplate.bind({});
NoProfileImage.args = {
  firstName: 'Carleton',
  lastName: 'Banks',
  email: 'george.hadjisophocleous@carleton.ca',
  phoneNumber: ' 613-520-2600 x1234',
  link: 'https://carleton.ca',
  tags: {
    category: [
      {
        id: 1,
        name: 'Breaking News',
        slug: 'breaking-news',
      },
      {
        id: 2,
        name: 'Headline',
        slug: 'headline',
      },
    ],
  },
  designation: 'Manager',
};

export const MultipleCardsWithImage = () => (
  <Column cols="4" maxWidth="7xl" gridGap="5">
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
      profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
    />
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
      profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
    />
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
      profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
    />
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
      profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
    />
  </Column>
);

export const MultipleCardsWithoutImage = () => (
  <Column cols="4" maxWidth="7xl" gridGap="5">
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
    />
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
    />
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
    />
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      phoneNumber=" 613-520-2600 x1234"
      link="https://carleton.ca"
      tags={{
        category: [
          {
            id: 1,
            name: 'Breaking News',
            slug: 'breaking-news',
          },
          {
            id: 2,
            name: 'Headline',
            slug: 'headline',
          },
        ],
      }}
      designation="Manager"
    />
  </Column>
);

export const MinimumPeople = () => (
  <PeopleCard
    firstName="Carleton"
    lastName="Banks"
    email="george.hadjisophocleous@carleton.ca"
    link="https://carleton.ca"
  />
);
