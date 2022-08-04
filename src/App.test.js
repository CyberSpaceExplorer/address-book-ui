import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Manage Address Book link', () => {
  render(<App />);
  const linkElementAddressBook = screen.getByText(/Manage Address Book/i);
  expect(linkElementAddressBook).toBeInTheDocument();
  const linkElementSendEmail = screen.getByText(/Send Email/i);
  expect(linkElementSendEmail).toBeInTheDocument();
});

test('Renders Send Email link', () => {
  render(<App />);
  const linkElementSendEmail = screen.getByText(/Send Email/i);
  expect(linkElementSendEmail).toBeInTheDocument();
});

test('Renders GitHub link', () => {
  render(<App />);
  const linkElementGitHub = screen.getByText(/GitHub/i);
  expect(linkElementGitHub).toBeInTheDocument();
});

test('Renders Home link', () => {
  render(<App />);
  const linkElementHome = screen.getByText(/Home/i);
  expect(linkElementHome).toBeInTheDocument();
});