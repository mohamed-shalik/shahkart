import { render, screen } from '@testing-library/react';
import Initial from './initial';

test('renders learn react link', () => {
  render(<Initial />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
