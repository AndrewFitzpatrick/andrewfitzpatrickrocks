// src/components/Layout.js
import React from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header.js";
// import Footer from "./Footer.js";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;