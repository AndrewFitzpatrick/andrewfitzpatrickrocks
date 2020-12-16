// src/pages/home.js
import React from 'react';
import homepage from "../data/sitedata.js";
import Link from '../components/Link';
import RolloverImage from '../components/RolloverImage';
import FadeInSection from '../components/Fadein';
import arrow from '../images/arrow.png'

function Home() {

function jobTitles(jobData) {
  const jobInfo = [jobData.company, jobData.title, jobData.date];
  return jobInfo.map((job, i) => {
    return(
      <div key={i} >
        <h4>
          <Link to = {jobData.link}>
            {job}
          </Link>
        </h4>
      </div>
    )
  })
}

function logoImages(imageData) {
  return (
  <div className="row">
    { imageData.images.map((logo, i) => (
      <div className = "one-third column bg-image" key={i} style={{backgroundImage: `url(${logo.image})` }}>
        <Link to = {logo.link}>
          <RolloverImage
            defaultImage = {logo.image}
            rolloverImage = {logo.imageHover}
            altImage = {logo.alt}/>
        </Link>
      </div>
    ))}
    </div>
  )
}

function arrowLink(linkData) {
  return(
    <div className="row">
      <div
        className= "two columns arrow"
        style={{
          backgroundImage: `url(${arrow})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Link to = {linkData.link}>
          <RolloverImage
            defaultImage = {require('../images/arrow.png').default}
            altImage = "arrow"
            rolloverImage = {require('../images/arrow_over.png').default}
          />
        </Link>
      </div>
    </div>
  )
}

function homepageSection() {
  return homepage.map((item, i) => {
    return(
      <div
        className = "full-width"
        key={i}
        style={{backgroundColor: item.bgcolor}}
      >
        <div className="home-port">
        <FadeInSection>
          {jobTitles(item)}
          {logoImages(item)}
          {arrowLink(item)}
          </FadeInSection>
        </div>
      </div>
    )
  }
)}
  return(
    <div>
      <div className="hero">
        <div className="five columns over">
          <h1>Andrew Fitzpatrick</h1><h3>.rocks</h3>
        </div>
        <div className="seven columns wrapper under">
          <img
            src={require('../images/fitz_pic.jpg').default}
            id="slide" className="heroImage"
            alt="Andrew Fitzpatrick rocks"
          />
        </div>
      </div>
      <div className="fitzfolio full-width">
        <h2>FITZ-FOLIO</h2>
      </div>
      {homepageSection()}
    </div>
  );
};

export default Home;