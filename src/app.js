import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/about';
import Oils from './components/oils';
import Work from './components/work';
import Footer from './components/footer';

export default function App() {
  return (
      <Router>
        <div>
          <header className="header">
            <nav className="header__nav wrapper">
              <ul className="header__list">
                <li className="header__list-item">
                  <Link class="header__list-link" to="/">О бизнесе в doTerra</Link>
                </li>
                <li className="header__list-item">
                  <Link class="header__list-link" to="/work">Стать консультантом</Link>
                </li>
                <li className="header__list-item">
                  <Link class="header__list-link" to="/oils">Эфирные масла</Link>
                </li>
              </ul>
            </nav>
          </header>

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
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}
