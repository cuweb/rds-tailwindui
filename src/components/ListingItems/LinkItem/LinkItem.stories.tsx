import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LinkItem, LinkItemProps } from './LinkItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { LinkItemData as data } from './LinkItemData';

export default {
  title: 'Components/List Items/Links',
  component: LinkItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof LinkItem>;

const DefaultTemplate: Story<LinkItemProps> = args => (
  <LinkItem as="div" link={args.link}>
    <LinkItem.Content>
      <LinkItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
    </LinkItem.Content>
  </LinkItem>
);

const SingleItemPanelTemplate: Story<LinkItemProps> = args => (
  <Column maxWidth="5xl">
    <Panel hasBorder>
      <LinkItem as="div" link={args.link}>
        <LinkItem.Content>
          <LinkItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
        </LinkItem.Content>
      </LinkItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<LinkItemProps> = () => (
  <Container>
    <Column maxWidth="5xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(({ id, title, link }) => (
            <LinkItem key={id}>
              <LinkItem.Content>
                <LinkItem.Title title={title} link={link} />
              </LinkItem.Content>
            </LinkItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<LinkItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Link listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(({ id, title, link }) => (
            <LinkItem key={id}>
              <LinkItem.Content>
                <LinkItem.Title title={title} link={link} />
              </LinkItem.Content>
            </LinkItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'Job item title',
  link: 'https://carleton.ca',
};

export const SingleItemPanel = SingleItemPanelTemplate.bind({});
SingleItemPanel.args = {
  ...Default.args,
};

export const StackedListPanel = StackedListPanelTemplate.bind({});
StackedListPanel.args = {
  ...Default.args,
};

export const StackedListPanelTitle = StackedListPanelTitleTemplate.bind({});
StackedListPanelTitle.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemPanel.storyName = 'Single item in panel';
StackedListPanel.storyName = 'List w/shadow';
StackedListPanelTitle.storyName = 'List w/title';
