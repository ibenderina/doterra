import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/about';
import Oils from './components/oils';
import Work from './components/work';
import Auth from './components/auth';

export default function App() {
  return (
      <Router>
        <div className="container">
          <header className="header">
            <nav className="header__nav wrapper">
              <ul className="header__list">
                <li className="header__list-item">
                  <Link class="header__list-link" to="/about">О бизнесе в doTerra</Link>
                </li>
                <li className="header__list-item">
                  <Link class="header__list-link" to="/">Регистрация</Link>
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Auth />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
