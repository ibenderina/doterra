import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Oils from '../components/oils';
import Work from '../components/work'

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">About</Link>
              </li>
              <li>
                <Link to="/oils">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/oils">
              <Oils />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/">
              Пока,
            </Route>
          </Switch>


          пуся
        </div>
      </Router>
  );
}
