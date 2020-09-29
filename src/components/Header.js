// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";

const navData = [
  {
    // fontSize: 'h5',
    link: '/about',
    text: 'WHO IS THIS GUY?',
    classes: 'four columns small'
  },
  {
    // fontSize: 'h4',
    link: '/',
    text: 'ANDREW FITZPATRICK',
    classes: 'four columns large'
  },
  {
    // fontSize: 'h5',
    link: '/contact',
    text: 'SAY HI',
    classes: 'four columns small'
  }
];


const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div class="row">
            {
              navData.map((item, i) => (
                <div className = {item.classes} key={i}>
                  <h4>
                    <Link to = {item.link} key={i}>
                      {item.text}
                    </Link>
                  </h4>
                </div>
              ))
            }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;