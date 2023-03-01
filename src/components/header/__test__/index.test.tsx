import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '..';

test('renders learn react link', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
