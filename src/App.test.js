import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './layout/header/Header';
import userEvent from '@testing-library/user-event';

test('should render App.js', () => {
  render(<App />);
  const linkElement = screen.getByTestId('App');
  expect(linkElement).toBeInTheDocument();
});

test('click button login', () => {
  render(<Header />);
  userEvent.click(screen.getByText('Login'));
  expect(screen.getByText('Login')).toBeInTheDocument();
})