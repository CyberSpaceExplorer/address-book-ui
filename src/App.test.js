import { render, screen } from '@testing-library/react';
import App from './App';

test('Manage Address Book link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Manage Address Book/i);
  expect(linkElement).toBeInTheDocument();
});
