import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DetailsItem, DetailsItemProps } from './DetailsItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { DetailsItemData as data } from './DetailsItemData';

export default {
  title: 'Components/List Items/Details',
  component: DetailsItem,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof DetailsItem>;

const DefaultTemplate: Story<DetailsItemProps> = args => (
  <DetailsItem as="div">
    <DetailsItem.Icon icon="PlusIcon" />
    <DetailsItem.Content>
      <DetailsItem.Title title={args.title} />
      <DetailsItem.Description description={args.description} />
    </DetailsItem.Content>
  </DetailsItem>
);

const SingleItemPanelTemplate: Story<DetailsItemProps> = args => (
  <Column maxWidth="3xl">
    <Panel hasBorder>
      <DetailsItem as="div">
        <DetailsItem.Icon icon={args.icon} />
        <DetailsItem.Content>
          <DetailsItem.Title title={args.title} />
          <DetailsItem.Description description={args.description} />
        </DetailsItem.Content>
      </DetailsItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<DetailsItemProps> = () => (
  <Container>
    <Column maxWidth="3xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(({ title, description, icon }) => (
            <DetailsItem key={title}>
              <DetailsItem.Icon icon={icon} />
              <DetailsItem.Content>
                <DetailsItem.Title title={title} />
                <DetailsItem.Description description={description} />
              </DetailsItem.Content>
            </DetailsItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<DetailsItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Details listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(({ title, description, icon }) => (
            <DetailsItem key={title}>
              <DetailsItem.Icon icon={icon} />
              <DetailsItem.Content>
                <DetailsItem.Title title={title} />
                <DetailsItem.Description description={description} />
              </DetailsItem.Content>
            </DetailsItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: '405 Robertson Hall',
  description: '1125 Colonel By Drive, Ottawa, ON, K1A 4A4',
  icon: 'MapPinIcon',
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
