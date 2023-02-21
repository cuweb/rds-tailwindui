import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PeopleItems, PeopleItemsProps } from './PeopleItems';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
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

const styles = {
  twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

const DefaultTemplate: Story<PeopleItemsProps> = args => (
  <PeopleItems {...args} />
);

// const SingleItemPanelTemplate: Story<PeopleItemsProps> = args => (
//   <Column maxWidth="5xl">
//     <Panel hasBorder>
//       <PeopleItems as="div" link={args.link}>
//         <PeopleItems.Image image={args.image} />
//         <PeopleItems.Content>
//           <PeopleItems.Title title={args.title} link={args.link} />
//           <PeopleItems.Date date={args.date} />
//           <PeopleItems.Excerpt excerpt={args.excerpt} />
//         </PeopleItems.Content>
//       </PeopleItems>
//     </Panel>
//   </Column>
// );

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
              jobTitle,
              phoneNumber,
              link,
              alt,
            }) => (
              <div key={id}>
                <PeopleItems
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
              jobTitle,
              phoneNumber,
              link,
              alt,
            }) => (
              <div key={id}>
                <PeopleItems
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
              </div>
            )
          )}
        </div>
      </Panel>
    </Column>
  </Container>
);
// const StackedListPanelTitleTemplate: Story<PeopleItemsProps> = () => (
//   <Container bgColor="grey">
//     <Column maxWidth="5xl">
//       <Panel hasBorder hasShadow>
//         <Panel.Title>News listing</Panel.Title>
//         <StackedList hasDividers>
//           {data.map(({ id, title, link, image, date, excerpt }) => (
//             <PeopleItems key={id}>
//               <PeopleItems.Image image={image} />
//               <PeopleItems.Content>
//                 <PeopleItems.Title title={title} link={link} />
//                 <PeopleItems.Date date={date} />
//                 <PeopleItems.Excerpt excerpt={excerpt} />
//               </PeopleItems.Content>
//             </PeopleItems>
//           ))}
//         </StackedList>
//       </Panel>
//     </Column>
//   </Container>
// );

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
  jobTitle: 'Manager',
  link: '#',
};

export const StackedListTwoColumn = StackedListTwoColumnTemplate.bind({});
StackedListTwoColumn.args = {
  ...Default.args,
};

export const StackedListPanel = StackedListPanelTemplate.bind({});
StackedListPanel.args = {
  ...Default.args,
};

// export const StackedListPanelTitle = StackedListPanelTitleTemplate.bind({});
// StackedListPanelTitle.args = {
//   ...Default.args,
// };

Default.storyName = 'Default item';
NoImage.storyName = ' No People Image Item';
StackedListPanel.storyName = 'List w/shadow';
StackedListTwoColumn.storyName = 'Two Column Listing ';
// StackedListPanelTitle.storyName = 'List w/title';
