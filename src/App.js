import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
// components
import Home from './components/Home';
import ReactApp from './components/ReactApp';
import CharacterContainer from './components/CharacterContainer';

const App = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/thank-you">
          <ReactApp />
        </Route>
        <Route exact path="/:id" render={({history, match: { params: { id }}} ) => (
          <CharacterContainer history={history} id={id} />
        )} />
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
