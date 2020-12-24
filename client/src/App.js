import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import MapPage from './components/MapPage';
import LogsPage from './components/LogsPage';
import DeparturePage from './components/DeparturePage';
import FeedPage from './components/FeedPage';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/logs">
            <LogsPage />
          </Route>
          <Route exact path="/feed">
            <FeedPage />
          </Route>
          <Route exact path="/departure">
            <DeparturePage />
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
