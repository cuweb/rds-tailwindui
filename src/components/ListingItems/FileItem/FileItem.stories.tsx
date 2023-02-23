import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FileItem, FileItemProps } from './FileItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
import { FileItemData as data } from './FileItemData';

export default {
  title: 'Cards & Lists/Files/List Item',
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

const SingleItemListTemplate: Story<FileItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <FileItem as="div" link={args.link}>
        <FileItem.Content>
          <FileItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <FileItem.Details filesize={args.filesize} date={args.date} />
        </FileItem.Content>
      </FileItem>
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<FileItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <StackedList header="File listing" hasBorder hasShadow>
        {data.map(({ id, title, link, filesize, date }) => (
          <FileItem key={id}>
            <FileItem.Content>
              <FileItem.Title title={title} link={link} />
              <FileItem.Details filesize={filesize} date={date} />
            </FileItem.Content>
          </FileItem>
        ))}
      </StackedList>
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

export const SingleItemList = SingleItemListTemplate.bind({});
SingleItemList.args = {
  ...Default.args,
};

export const MultiItemList = MultiItemListTemplate.bind({});
MultiItemList.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemList.storyName = 'Single item list';
MultiItemList.storyName = 'Multi item list';
