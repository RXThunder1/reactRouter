import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => (
  <div>
    <h1>Color List</h1>
    <Link to="/colors/new">Add New Color</Link>
    <ul>
      {colors.map(color => (
        <li key={color}>
          <Link to={`/colors/${color}`}>{color}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ColorList;