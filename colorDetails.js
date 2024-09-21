import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const ColorDetails = ({ colors }) => {
  const { color } = useParams();
  if (!colors.includes(color)) return <Redirect to="/colors" />;

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <h1>{color}</h1>
    </div>
  );
};

export default ColorDetails;