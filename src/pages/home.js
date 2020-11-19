// src/pages/home.js
import React from "react";
import homepage from "../data/sitedata.js";
import Link from '../components/Link';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="five columns">
          <h1>Andrew Fitzpatrick</h1><h3>.rocks</h3>
        </div>
        <div className="seven columns wrapper">
          <img src={require('../images/fitz_pic.jpg')} id="slide" className="heroImage" alt="Andrew Fitzpatrick rocks"/>
        </div>
      </div>
      <div className="fitzfolio full-width">
        <h2>FITZ-FOLIO</h2>
      </div>
      <div>
      {
        homepage.map((item, i) => (
          <div
            className = "home-port full-width"
            key={i}
          >
            <Link to = {item.link}>
              <h4>{item.company}</h4>
            </Link>
            <div><h4>{item.title}</h4></div>
            <div><h4>{item.date}</h4></div>
            {
              item.image.map((logo, i) => (
                <div className= "three columns" key={i}>
                  <img src={logo} alt="logo" />
                </div>

              ))
            }
          </div>

        ))
      }
      </div>
    </div>
  );
};

export default Home;