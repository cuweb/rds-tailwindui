import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { UserInfoType } from '../../types/UserInfo';

export default {
  title: 'Components/Elements/Avatar',
  component: Avatar,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Avatar>;

const DefaultTemplate: Story<AvatarProps> = (args) => <Avatar {...args} />;

const user: UserInfoType = {
  image: {
    src: 'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
    alt: '',
  },
  firstName: 'Danny',
  lastName: 'Brown',
};

const userNoImage: UserInfoType = {
  firstName: 'Danny',
  lastName: 'Brown',
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  user: { ...user },
  onClick: () => {
    alert('I am an alert ');
  },
};

export const RoundedCorners = DefaultTemplate.bind({});
RoundedCorners.args = {
  user: { ...user },
  rounded: 'md',
  onClick: () => {
    alert('I am an alert ');
  },
};

export const Circular = DefaultTemplate.bind({});
Circular.args = {
  user: { ...user },
  rounded: 'full',
  onClick: () => {
    alert('I am an alert ');
  },
};

//No Border
export const WithBorder = DefaultTemplate.bind({});
WithBorder.args = {
  user: { ...user },
  caption: 'Director, Enterprise Application',
  rounded: 'md',
  noBorder: true,
  onClick: () => {
    alert('I am an alert ');
  },
};

// no image
export const NoImage = () => (
  <>
    <div className="grid grid-cols-1 gap-16">
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
    <div className="grid grid-cols-1 gap-16">
      <Avatar user={user} rounded="lg" size="xs" caption="xs" />
      <Avatar user={user} rounded="lg" size="sm" caption="sm" />
      <Avatar user={user} rounded="lg" size="md" caption="md" />
      <Avatar user={user} rounded="lg" size="lg" caption="lg" />
      <Avatar user={user} rounded="lg" size="xl" caption="xl" />
      <Avatar user={user} rounded="lg" size="2xl" caption="2xl" />
      <Avatar user={user} rounded="lg" size="4xl" caption="4xl" />
    </div>
  </>
);
