import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Redirect to="/dogs" />;

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <h2>Facts:</h2>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;