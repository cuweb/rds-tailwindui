import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FileItem, FileItemProps } from './FileItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { FileItemData as data } from './FileItemData';

export default {
  title: 'Components/List Items/Files',
  component: FileItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FileItem>;

const DefaultTemplate: Story<FileItemProps> = args => (
  <FileItem as="div" link={args.link}>
    <FileItem.Content>
      <FileItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      <FileItem.Details filesize={args.filesize} date={args.date} />
    </FileItem.Content>
  </FileItem>
);

const SingleItemPanelTemplate: Story<FileItemProps> = args => (
  <Column maxWidth="5xl">
    <Panel hasBorder>
      <FileItem as="div" link={args.link}>
        <FileItem.Content>
          <FileItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <FileItem.Details filesize={args.filesize} date={args.date} />
        </FileItem.Content>
      </FileItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<FileItemProps> = () => (
  <Container>
    <Column maxWidth="5xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(({ id, title, link, filesize, date }) => (
            <FileItem key={id}>
              <FileItem.Content>
                <FileItem.Title title={title} link={link} />
                <FileItem.Details filesize={filesize} date={date} />
              </FileItem.Content>
            </FileItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<FileItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>File listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(({ id, title, link, filesize, date }) => (
            <FileItem key={id}>
              <FileItem.Content>
                <FileItem.Title title={title} link={link} />
                <FileItem.Details filesize={filesize} date={date} />
              </FileItem.Content>
            </FileItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'File item title',
  link: 'https://carleton.ca',
  filesize: '175KB',
  date: 'September 24th, 2020',
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
