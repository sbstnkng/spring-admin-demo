import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

test('renders title', () => {
  render(<Welcome />);

  const title = screen.getByTestId('title');

  expect(title).toHaveTextContent('Welcome to the react-admin demo');
});

test('renders subtitle', () => {
  render(<Welcome />);

  const subtitle = screen.getByTestId('subtitle');

  expect(subtitle).toHaveTextContent(
    "This is a imaginary back-office tool. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload."
  );
});

test('renders source code button', () => {
  render(<Welcome />);

  const button = screen.getByTestId('source-code-button');

  expect(button).toHaveTextContent('Source for this demo');
});
