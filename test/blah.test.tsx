import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '../src';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    root.render(<Button title="Storybook Button" />);
    root.unmount();
  });
});
