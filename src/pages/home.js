// src/pages/home.js
import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="hero container">
        <div className="row">
          <div className="column five">
            <h1>Andrew Fitzpatrick</h1><h2>.rocks</h2>
          </div>
          <div className="column seven">
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;