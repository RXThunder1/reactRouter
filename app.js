import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

const App = ({ dogs }) => {
  return (
    <Router>
      <Nav dogs={dogs} />
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          <DogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </Router>
  );
};

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'path/to/whiskey.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    // Add other dogs...
  ]
};

export default App;