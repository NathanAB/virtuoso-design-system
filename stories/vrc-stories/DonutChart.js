/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import { text, boolean, select } from '@storybook/addon-knobs';

import { DonutChart } from '@';

const mockData = [
  {
    id: 'Email',
    value: 30000,
  },
  {
    id: 'SDK',
    value: 30000,
  },
  {
    id: 'Files',
    value: 30000,
  },
];

const Container = ({ children }) => (
  <div style={{ width: '300px', height: '300px' }}>{children}</div>
);

const onClick = (node, e) => {
  window.alert(`Clicked ${node.label}`);
};

storiesOf('DonutChart', module).add('default', () => (
  <Container>
    <DonutChart data={mockData} onClick={onClick} />
  </Container>
));
