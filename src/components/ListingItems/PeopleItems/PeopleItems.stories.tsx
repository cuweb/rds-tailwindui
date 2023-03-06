import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PeopleItems, PeopleItemsProps } from './PeopleItems';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
import { PeopleItemsData as data } from './PeopleItemsData';

export default {
  title: 'Cards & Lists/People/List',
  component: PeopleItems,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof PeopleItems>;

const DefaultTemplate: Story<PeopleItemsProps> = args => (
  <PeopleItems {...args} />
);

const SingleItemListTemplate: Story<PeopleItemsProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <PeopleItems {...args} />
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<PeopleItemsProps> = () => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      {data.map(
        ({
          id,
          firstName,
          lastName,
          email,
          tags,
          profileImage,
          jobTitle,
          phoneNumber,
          link,
          alt,
        }) => (
          <PeopleItems
            key={id}
            as="li"
            firstName={firstName}
            lastName={lastName}
            email={email}
            tags={tags}
            profileImage={profileImage}
            jobTitle={jobTitle}
            phoneNumber={phoneNumber}
            link={link}
            alt={alt}
          />
        )
      )}
    </StackedList>
  </Column>
);

const MultiItemColumnsTemplate: Story<PeopleItemsProps> = () => (
  <Column maxWidth="5xl">
    <StackedList cols="2" hasBorder hasShadow>
      {data.map(
        ({
          id,
          firstName,
          lastName,
          email,
          tags,
          profileImage,
          jobTitle,
          phoneNumber,
          link,
          alt,
        }) => (
          <PeopleItems
            key={id}
            as="li"
            firstName={firstName}
            lastName={lastName}
            email={email}
            tags={tags}
            profileImage={profileImage}
            jobTitle={jobTitle}
            phoneNumber={phoneNumber}
            link={link}
            alt={alt}
          />
        )
      )}
    </StackedList>
  </Column>
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
  jobTitle: 'Manager',
  link: '#',
  profileImage:
    'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
  alt: 'Image alt tag',
};

export const SingleItemList = SingleItemListTemplate.bind({});
SingleItemList.args = {
  firstName: 'Carleton',
  lastName: 'Banks',
  email: 'george.hadjisophocleous@carleton.ca',
  phoneNumber: '613-520-2600 x1234',
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
  jobTitle: 'Manager',
  link: '#',
};

export const NoImagePeopleList = SingleItemListTemplate.bind({});
NoImagePeopleList.args = {
  firstName: 'Carleton',
  lastName: 'Banks',
  email: 'george.hadjisophocleous@carleton.ca',
  phoneNumber: '613-520-2600 x1234',
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
  jobTitle: 'Manager',
  link: '#',
  noImage: true,
};

export const MultiItemList = MultiItemListTemplate.bind({});
MultiItemList.args = {
  ...Default.args,
};

export const MultiItemColumns = MultiItemColumnsTemplate.bind({});
MultiItemColumns.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemList.storyName = 'Item in panel';
MultiItemList.storyName = 'Single column list';
MultiItemColumns.storyName = 'Double column list';
NoImagePeopleList.storyName = 'Not Displaying Image in List';
