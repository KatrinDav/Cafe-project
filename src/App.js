import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Menu from "./components/Menu.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" activeClassName="selected">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Menu" activeClassName="selected">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" activeClassName="selected">
                  {" "}
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
