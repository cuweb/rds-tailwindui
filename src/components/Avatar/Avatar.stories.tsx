import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { UserInfoType } from '../../types/UserInfo';

// COMPONENT AND PROP NAME UPDATE REQUIRED
// UPDATE FILE NAME FOR IMPORT

// COMPONENT TITLE UPDATE REQUIRED
// COMPONENT NAME UPDATE REQUIRED
// COMPONENT NAME IN {typeof} REQUIRED
export default {
  title: 'Components/Input/Avatar',
  component: Avatar,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Avatar>;

// PROP NAME UPDATE REQUIRED
// ADD ARGS TO COMPONENTS IF APPLICABLE
// ADD COMPONENT MARKUP TO BUILD DEFAULT EXAMPLE
const DefaultTemplate: Story<AvatarProps> = args => <Avatar {...args} />;

const user: UserInfoType = {
  image: {
    src:
      'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: '',
  },
  firstName: 'Danny',
  lastName: 'Brown',
};

// ADD COMPONENT ARGS WITH DEFAULT SETTINGS
export const Default = DefaultTemplate.bind({});
Default.args = {
  user: { ...user },
  caption: 'Director, Enterprise Application',
  rounded: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};

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
