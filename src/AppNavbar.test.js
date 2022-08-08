import React from "react";
import { render, screen } from "@testing-library/react";
import AppNavbar from "./AppNavbar";
import {BrowserRouter} from "react-router-dom";


test('render send email link', () => {
  render(<AppNavbar />, {wrapper: BrowserRouter});
    expect(screen.getByText('Send Email')).toBeInTheDocument();
});

test('render github link', () => {
    render(<AppNavbar />, {wrapper: BrowserRouter});
    expect(screen.getByText('GitHub')).toBeInTheDocument();
});

test('render send email link', () => {
    render(<AppNavbar />, {wrapper: BrowserRouter});
    // const linkDom = screen.getByRole('nav-link', { name: 'Send Email' });
    const linkDom = screen.getByText(/Send Email/i);
    // check the link location
    expect(linkDom).toHaveAttribute("href", "mailto:xinyizhou1999@hotmail.com");
});

test('render github link', () => {
    render(<AppNavbar />, {wrapper: BrowserRouter});
    const linkDom = screen.getByText(/GitHub/i);
    // check the link location
    expect(linkDom).toHaveAttribute("href", "https://github.com/CyberSpaceExplorer/address-book-ui");
});