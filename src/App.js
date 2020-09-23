// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Restaurants from "./pages/restaurants";
import Pinball from "./pages/pacific-pinball";
import Fitztastic from "./pages/fitztastic";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/sciarra-restaurants">
          <Restaurants />
        </Route>
        <Route path="/pacific-pinball">
          <Pinball />
        </Route>
        <Route path="/fitztastic">
          <Fitztastic />
        </Route>
      </Switch>
    </Router>
  );
}