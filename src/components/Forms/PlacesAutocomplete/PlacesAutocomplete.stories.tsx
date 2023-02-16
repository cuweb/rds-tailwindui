import React from 'react';
import { Meta } from '@storybook/react';
import { PlacesAutoComplete } from './PlacesAutocomplete';
import { Column } from '../../../layouts';
import { Form } from '../BaseForm/Form';

export default {
  title: 'Forms/PlacesAutoComplete',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof PlacesAutoComplete>;

export const Default = () => {
  return (
    <Column maxWidth="5xl">
      <Form onSubmit={() => {}} schema={{}}>
        <PlacesAutoComplete name="location" label="Pick a location" />
      </Form>
    </Column>
  );
};
