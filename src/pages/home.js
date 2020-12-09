// src/pages/home.js
import React from 'react';
import homepage from "../data/sitedata.js";
import Link from '../components/Link';
import Image from '../components/Image';
import FadeInSection from '../components/Fadein';
import arrow from '../images/arrow.png'

class Home extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    showHoverImage: false
  }
  this.jobTitles = this.jobTitles.bind(this);
  this.homepageSection = this.homepageSection.bind(this);
  this.logoImages = this.logoImages.bind(this);
}

jobTitles(jobData) {
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

logoImages(imageData) {
  return (
  <div className="row">
    { imageData.images.map((logo, i) => (
      <div className = "one-third column bg-image" key={i} style={{backgroundImage: `url(${logo.image})` }}>
        <Link to = {logo.link}>
          <Image
            defaultImage = {logo.image}
            rolloverImage = {logo.imageHover}
            altImage = {logo.alt}/>
        </Link>
      </div>
    ))}
    </div>
  )
}

arrowLink(linkData) {
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
          <Image
            defaultImage = {require('../images/arrow.png').default}
            altImage = "arrow"
            rolloverImage = {require('../images/arrow_over.png').default}
          />
        </Link>
      </div>
    </div>
  )
}

homepageSection() {
  return homepage.map((item, i) => {
    return(
      <div
        className = "full-width"
        key={i}
        style={{backgroundColor: item.bgcolor}}
      >
        <div className="home-port">
        <FadeInSection>
          {this.jobTitles(item)}
          {this.logoImages(item)}
          {this.arrowLink(item)}
          </FadeInSection>
        </div>
      </div>
    )
  }
)}

  render() {
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
        {this.homepageSection()}
      </div>
    );
  };
};

export default Home;