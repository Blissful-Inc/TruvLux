import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import NotFoundPage from './components/NotFoundPage';

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
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
