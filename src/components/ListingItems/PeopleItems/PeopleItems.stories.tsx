import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PeopleItems, PeopleItemsProps } from './PeopleItems';
// import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
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

const SingleColPanelTemplate: Story<PeopleItemsProps> = () => (
  <Column maxWidth="5xl">
    <Panel hasBorder>
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
    </Panel>
  </Column>
);

const DoubleColPanelTemplate: Story<PeopleItemsProps> = () => (
  <Column maxWidth="5xl">
    <Panel cols="2" hasBorder hasShadow>
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
    </Panel>
  </Column>
);

// const StackedListPanelTemplate: Story<PeopleItemsProps> = () => (
//   <Container>
//     <Column maxWidth="5xl">
//       <Panel hasShadow>
//         <StackedList hasDividers>
//           {data.map(
//             ({
//               id,
//               firstName,
//               lastName,
//               email,
//               tags,
//               profileImage,
//               jobTitle,
//               phoneNumber,
//               link,
//               alt,
//             }) => (
//               <div key={id}>
//                 <PeopleItems
//                   firstName={firstName}
//                   lastName={lastName}
//                   email={email}
//                   tags={tags}
//                   profileImage={profileImage}
//                   jobTitle={jobTitle}
//                   phoneNumber={phoneNumber}
//                   link={link}
//                   alt={alt}
//                 />
//               </div>
//             )
//           )}
//         </StackedList>
//       </Panel>
//     </Column>
//   </Container>
// );

// const StackedListTwoColumnTemplate: Story<PeopleItemsProps> = () => (
//   <Container>
//     <Column maxWidth="5xl">
//       <Panel hasShadow>
//         <div
//           className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
//         >
//           {data.map(
//             ({
//               id,
//               firstName,
//               lastName,
//               email,
//               tags,
//               profileImage,
//               jobTitle,
//               phoneNumber,
//               link,
//               alt,
//             }) => (
//               <div key={id}>
//                 <PeopleItems
//                   firstName={firstName}
//                   lastName={lastName}
//                   email={email}
//                   tags={tags}
//                   profileImage={profileImage}
//                   jobTitle={jobTitle}
//                   phoneNumber={phoneNumber}
//                   link={link}
//                   alt={alt}
//                 />
//               </div>
//             )
//           )}
//         </div>
//       </Panel>
//     </Column>
//   </Container>
// );

// const StackedListPanelTitleTemplate: Story<PeopleItemsProps> = () => (
//   <Container bgColor="grey">
//     <Column maxWidth="5xl">
//       <Panel header="People listing" hasBorder hasShadow>
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

export const SingleColPanel = SingleColPanelTemplate.bind({});
SingleColPanel.args = {
  ...Default.args,
};

export const DoubleColPanel = DoubleColPanelTemplate.bind({});
DoubleColPanel.args = {
  ...Default.args,
};

// export const StackedListTwoColumn = StackedListTwoColumnTemplate.bind({});
// StackedListTwoColumn.args = {
//   ...Default.args,
// };

// export const StackedListPanel = StackedListPanelTemplate.bind({});
// StackedListPanel.args = {
//   ...Default.args,
// };

// export const StackedListPanelTitle = StackedListPanelTitleTemplate.bind({});
// StackedListPanelTitle.args = {
//   ...Default.args,
// };

Default.storyName = 'Default item';
NoImage.storyName = ' No People Image Item';
// StackedListPanel.storyName = 'List w/shadow';
// StackedListTwoColumn.storyName = 'Two Column Listing ';
// StackedListPanelTitle.storyName = 'List w/title';
