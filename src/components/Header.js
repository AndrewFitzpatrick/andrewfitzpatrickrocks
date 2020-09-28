// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/">
          <button>Andrew Fitzpatrick</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;