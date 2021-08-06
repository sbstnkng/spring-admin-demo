import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('renders Dashboard header', () => {
  render(<Dashboard />);

  const header = screen.getByTestId('header');

  expect(header).toHaveTextContent('Welcome to the administration');
});

test('renders Dashboard content', () => {
  render(<Dashboard />);

  const header = screen.getByTestId('content');

  expect(header).toHaveTextContent('Lorem ipsum dolor sit amet...');
});
