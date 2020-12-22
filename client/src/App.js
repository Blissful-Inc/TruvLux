import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import NotFoundPage from './components/NotFoundPage';
import MapPage from './components/MapPage';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Route exact path="/map">
            <MapPage />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
