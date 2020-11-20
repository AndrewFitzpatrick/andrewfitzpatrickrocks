// src/pages/home.js
import React from "react";
import homepage from "../data/sitedata.js";
import Link from '../components/Link';
import FadeInSection from '../components/Fadein';

class Home extends React.Component {
  render() {
    return(
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

      { homepage.map((item, i) => (



          <div
            className = "full-width"
            key={i}
            style={{backgroundColor: item.bgcolor}}

          >
            <div className="home-port">
            <FadeInSection>
              <Link to = {item.link}>
                <h4>{item.company}</h4>
              </Link>
              <div><h4>{item.title}</h4></div>
              <div><h4>{item.date}</h4></div>
              <div className="row">
              { item.image.map((logo, i) => (


                    <div className= "one-third column u-center-block" key={i}>
                      <img src={logo} alt="logo" />
                    </div>



              ))}
              </div>
              </FadeInSection>
            </div>
          </div>

      ))}

    </div>
  );
};
};

export default Home;