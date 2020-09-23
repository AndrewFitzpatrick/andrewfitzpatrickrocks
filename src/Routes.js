// src/App.js
import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Contact />
        </Route>

        <Route path="/">
          <Home />
        </Route>

        <Route path="/contact">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;