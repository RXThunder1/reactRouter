import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const [color, setColor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
      />
      <button type="submit">Add Color</button>
    </form>
  );
};

export default NewColorForm;