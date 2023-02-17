import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PeopleItems, PeopleItemsProps } from './PeopleItems';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { PeopleItemsData as data } from './PeopleItemsData';

export default {
  title: 'Cards & Lists/People/List Item',
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

const styles = {
  twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

const DefaultTemplate: Story<PeopleItemsProps> = args => (
  <PeopleItems as="div" link={args.link}>
    <PeopleItems.Image
      profileImage={args.profileImage}
      firstName={args.firstName}
      lastName={args.lastName}
    />
    <PeopleItems.Details>
      <PeopleItems.Name firstName={args.firstName} lastName={args.lastName} />
      <PeopleItems.Designation designation={args.designation} />
      <PeopleItems.Contact>
        <PeopleItems.Email email={args.email} />
        <PeopleItems.PhoneNumber phoneNumber={args.phoneNumber} />
      </PeopleItems.Contact>
      <PeopleItems.PeopleTags tags={args.tags} />
    </PeopleItems.Details>
  </PeopleItems>
);

const StackedListPanelTemplate: Story<PeopleItemsProps> = () => (
  <Container>
    <Column maxWidth="5xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(
            ({
              id,
              firstName,
              lastName,
              email,
              tags,
              profileImage,
              designation,
              phoneNumber,
              link,
              alt,
            }) => (
              <div key={id}>
                <PeopleItems as="div" link={link}>
                  <PeopleItems.Image
                    profileImage={profileImage}
                    firstName={firstName}
                    lastName={lastName}
                    alt={alt}
                  />
                  <PeopleItems.Details>
                    <PeopleItems.Name
                      firstName={firstName}
                      lastName={lastName}
                    />
                    <PeopleItems.Designation designation={designation} />
                    <PeopleItems.Contact>
                      <PeopleItems.Email email={email} />
                      <PeopleItems.PhoneNumber phoneNumber={phoneNumber} />
                    </PeopleItems.Contact>
                    <PeopleItems.PeopleTags tags={tags} />
                  </PeopleItems.Details>
                </PeopleItems>
              </div>
            )
          )}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListTwoColumnTemplate: Story<PeopleItemsProps> = () => (
  <Container>
    <Column maxWidth="5xl">
      <Panel hasShadow>
        <div
          className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
        >
          {data.map(
            ({
              id,
              firstName,
              lastName,
              email,
              tags,
              profileImage,
              designation,
              phoneNumber,
              link,
              alt,
            }) => (
              <div key={id}>
                <PeopleItems as="div" link={link}>
                  <PeopleItems.Image
                    profileImage={profileImage}
                    firstName={firstName}
                    lastName={lastName}
                    alt={alt}
                  />
                  <PeopleItems.Details>
                    <PeopleItems.Name
                      firstName={firstName}
                      lastName={lastName}
                    />
                    <PeopleItems.Designation designation={designation} />
                    <PeopleItems.Contact>
                      <PeopleItems.Email email={email} />
                      <PeopleItems.PhoneNumber phoneNumber={phoneNumber} />
                    </PeopleItems.Contact>
                    <PeopleItems.PeopleTags tags={tags} />
                  </PeopleItems.Details>
                </PeopleItems>
              </div>
            )
          )}
        </div>
      </Panel>
    </Column>
  </Container>
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
  link: '#',
  profileImage:
    'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
  alt: 'Image alt tag',
};

export const NoImage = DefaultTemplate.bind({});
NoImage.args = {
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
  designation: 'Manager',
  link: '#',
};

export const StackedListPanel = StackedListPanelTemplate.bind({});
StackedListPanel.args = {
  ...Default.args,
};
export const StackedListTwoColumn = StackedListTwoColumnTemplate.bind({});
StackedListTwoColumn.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
NoImage.storyName = ' No People Image Item';
StackedListPanel.storyName = 'List w/shadow';
StackedListTwoColumn.storyName = 'Two Column Listing ';
