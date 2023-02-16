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

const DefaultTemplate: Story<AvatarProps> = args => <Avatar {...args} />;

const user: UserInfoType = {
  image: {
    src:
      'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
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
  rounded: 'lg',
  onClick: () => {
    alert('I am an alert ');
  },
};

export const FullCircle = DefaultTemplate.bind({});
FullCircle.args = {
  user: { ...user },
  rounded: 'full',
  onClick: () => {
    alert('I am an alert ');
  },
};

export const WithShadow = DefaultTemplate.bind({});
WithShadow.args = {
  user: { ...user },
  rounded: 'lg',
  hasShadow: true,
  onClick: () => {
    alert('I am an alert ');
  },
};

export const WithBorder = DefaultTemplate.bind({});
WithBorder.args = {
  user: { ...user },
  rounded: 'lg',
  borderWidth: '4',
  onClick: () => {
    alert('I am an alert ');
  },
};

export const NoImage = DefaultTemplate.bind({});
NoImage.args = {
  user: { ...userNoImage },
  onClick: () => {
    alert('I am an alert ');
  },
};

export const SizesSquare = () => (
  <div className="grid gap-8">
    <Avatar user={userNoImage} size="xs" />
    <Avatar user={userNoImage} size="sm" />
    <Avatar user={userNoImage} size="md" />
    <Avatar user={userNoImage} size="lg" />
    <Avatar user={userNoImage} size="xl" />
    <Avatar user={userNoImage} size="2xl" />
    <Avatar user={userNoImage} size="4xl" />
    <h2> rounded Avatar </h2>
    <Avatar user={userNoImage} size="xs" rounded="full" />
    <Avatar user={userNoImage} size="sm" rounded="full" />
    <Avatar user={userNoImage} size="md" rounded="full" />
    <Avatar user={userNoImage} size="lg" rounded="full" />
    <Avatar user={userNoImage} size="xl" rounded="full" />
    <Avatar user={userNoImage} size="2xl" rounded="full" />
    <Avatar user={userNoImage} size="4xl" rounded="full" />
  </div>
);

export const SizesRounded = () => (
  <div className="grid gap-8">
    <Avatar user={userNoImage} size="xs" rounded="full" />
    <Avatar user={userNoImage} size="sm" rounded="full" />
    <Avatar user={userNoImage} size="md" rounded="full" />
    <Avatar user={userNoImage} size="lg" rounded="full" />
    <Avatar user={userNoImage} size="xl" rounded="full" />
    <Avatar user={userNoImage} size="2xl" rounded="full" />
    <Avatar user={userNoImage} size="4xl" rounded="full" />
  </div>
);
