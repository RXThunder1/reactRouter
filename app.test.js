import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const dogs = [
  { name: "Whiskey", age: 5, src: 'whiskey.jpg', facts: ["fact1", "fact2"] },
  // Add other dogs as needed
];

test('renders Dog Finder app', () => {
  render(
    <Router>
      <App dogs={dogs} />
    </Router>
  );
  expect(screen.getByText(/Dog List/i)).toBeInTheDocument();
});

test('navigates to Dog Details on link click', () => {
  render(
    <Router>
      <App dogs={dogs} />
    </Router>
  );

  fireEvent.click(screen.getByText(/Whiskey/i));
  expect(screen.getByText(/Whiskey/i)).toBeInTheDocument();
});

test('redirects to /dogs for non-existent dog', () => {
  render(
    <Router>
      <App dogs={dogs} />
    </Router>
  );

  fireEvent.click(screen.getByText(/Unknown Dog/i));
  expect(screen.getByText(/Dog List/i)).toBeInTheDocument();
});