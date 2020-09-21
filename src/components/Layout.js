// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;