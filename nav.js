import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ dogs }) => (
  <nav>
    {dogs.map(dog => (
      <Link key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</Link>
    ))}
  </nav>
);

export default Nav;