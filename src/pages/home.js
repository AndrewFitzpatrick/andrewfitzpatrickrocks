// src/pages/home.js
import React from "react";
import homepage from "../data/homepage.js";
import Link from './../components/Link';


const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="row">
          <div className="column five">
            <h1>Andrew Fitzpatrick</h1><h2>.rocks</h2>
          </div>
          <div className="column seven">
          </div>
        </div>
      </div>
      <div>
      {
          homepage.map((item, i) => (
            <div className = "home-port" key={i}>
              <Link to = {item.link} key={i}>
                <h4>{item.company}</h4>
              </Link>
                <div><h4>{item.title}</h4></div>
                <div><h4>{item.date}</h4></div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;