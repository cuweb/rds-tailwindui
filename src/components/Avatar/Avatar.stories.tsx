import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { UserInfoType } from '../../types/UserInfo';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Avatar>;

const DefaultTemplate: Story<AvatarProps> = (args) => <Avatar {...args} />;

const user: UserInfoType = {
  image: {
    src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: '',
  },
  firstName: 'Danny',
  lastName: 'Brown',
};

const userNoImage: UserInfoType = {
  firstName: 'Danny',
  lastName: 'Brown',
};

// ADD COMPONENT ARGS WITH DEFAULT SETTINGS
export const Default = DefaultTemplate.bind({});
Default.args = {
  user: { ...user },
  onClick: () => {
    alert('I am an alert ');
  },
};

// with Caption
export const WithCaption = DefaultTemplate.bind({});
WithCaption.args = {
  user: { ...user },
  caption: 'Director, Enterprise Application',
  onClick: () => {
    alert('I am an alert ');
  },
};

// with rounded
export const rounded = DefaultTemplate.bind({});
rounded.args = {
  user: { ...user },
  rounded: true,
  onClick: () => {
    alert('I am an alert ');
  },
};

// with roundedWithCaption
export const roundedWithCaption = DefaultTemplate.bind({});
roundedWithCaption.args = {
  user: { ...user },
  caption: 'Director, Enterprise Application',
  rounded: true,
  onClick: () => {
    alert('I am an alert ');
  },
};

//No Border
export const roundedNoBorder = DefaultTemplate.bind({});
roundedNoBorder.args = {
  user: { ...user },
  caption: 'Director, Enterprise Application',
  rounded: true,
  noBorder: true,
  onClick: () => {
    alert('I am an alert ');
  },
};

// no image
export const NoImage = () => (
  <>
    <div className="grid-cols-1 grid gap-16">
      <Avatar user={userNoImage} size="xs" caption="xs" />
      <Avatar user={userNoImage} size="sm" caption="sm" />
      <Avatar user={userNoImage} size="md" caption="md" />
      <Avatar user={userNoImage} size="lg" caption="lg" />
      <Avatar user={userNoImage} size="xl" caption="xl" />
      <Avatar user={userNoImage} size="2xl" caption="2xl" />
      <Avatar user={userNoImage} size="4xl" caption="4xl" />
    </div>
  </>
);

// all sizes for image
export const Sizes = () => (
  <>
    <div className="grid-cols-1 grid gap-16">
      <Avatar user={user} rounded size="xs" caption="xs" />
      <Avatar user={user} rounded size="sm" caption="sm" />
      <Avatar user={user} rounded size="md" caption="md" />
      <Avatar user={user} rounded size="lg" caption="lg" />
      <Avatar user={user} rounded size="xl" caption="xl" />
      <Avatar user={user} rounded size="2xl" caption="2xl" />
      <Avatar user={user} rounded size="4xl" caption="4xl" />
    </div>
  </>
);
