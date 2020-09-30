// src/App.js
import React from "react";
// import Routes from './Routes.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// Import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Restaurants from "./pages/restaurants";
import Pinball from "./pages/pacific-pinball";
import Fitztastic from "./pages/fitztastic";


// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.offset}%)`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    offset: -100,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    offset: -100,
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    offset: 0,
  },
};

export default function App() {
  return (
    <Router>
      <Header />
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper container"
      >
        <Route exact path="/" component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/sciarra-restaurants"  component={Restaurants} />
        <Route path="/pacific-pinball" component={Pinball} />
        <Route path="/fitztastic" component={Fitztastic} />
      </AnimatedSwitch>
      <Footer />
    </Router>
  );
}