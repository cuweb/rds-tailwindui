import React from 'react';
import { Meta } from '@storybook/react';
import { Column, Container } from '../../../layouts';
import { DateTimePicker } from './DateTimePicker';
import { Form } from '../BaseForm/Form';

export default {
  title: 'Components/Forms/Date & Time Picker',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof DateTimePicker>;

export const Default = () => {
  return (
    <Form onSubmit={() => {}} schema={{}}>
      <Form.DateTimePicker name="dateTime" label="Pick Start date and time" />;
    </Form>
  );
};

export const GreyBackground = () => {
  return (
    <Container bgColor="grey">
      <Form onSubmit={() => {}} schema={{}}>
        <Form.DateTimePicker name="dateTime" label="Pick Start date and time" />
        ;
      </Form>
    </Container>
  );
};

export const MaxWidth = () => {
  return (
    <Column maxWidth="3xl">
      <Form onSubmit={() => {}} schema={{}}>
        <Form.DateTimePicker name="dateTime" label="Pick Start date and time" />
        ;
      </Form>
    </Column>
  );
};
