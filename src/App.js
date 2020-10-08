import React, { Component } from 'react';
import './App.scss';
import Page from './components/Page';
import Nav from './components/Nav';
import Skeleton from './components/Skeleton';

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Restaurants from "./pages/restaurants";
import Cmcdems from "./pages/cmc-dems";
import Pinball from "./pages/pacific-pinball";
import Fitztastic from "./pages/fitztastic";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {left: 0}
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Nav>
          <Page path="/">
            <div className="page" style={{ backgroundColor: 'red' }}>
              <Skeleton>
                <Home />
              </Skeleton>
            </div>
          </Page>

          <Page path="/about">
            <div className="page" style={{ backgroundColor: 'orange' }}>
              <Skeleton>
                <About />
              </Skeleton>
            </div>
          </Page>

          <Page path="/contact">
            <div className="page" style={{ backgroundColor: 'blue' }}>
              <Skeleton>
                <Contact />
              </Skeleton>
            </div>
          </Page>

          <Page path="/sciarra-restaurants">
            <div className="page" style={{ backgroundColor: 'green' }}>
              <Skeleton>
                <Restaurants />
              </Skeleton>
            </div>
          </Page>

          <Page path="/cmc-dems">
            <div className="page" style={{ backgroundColor: 'yellow' }}>
              <Skeleton>
                <Cmcdems />
              </Skeleton>
            </div>
          </Page>

          <Page path="/pacific-pinball">
            <div className="page" style={{ backgroundColor: 'purple' }}>
              <Skeleton>
                <Pinball />
              </Skeleton>
            </div>
          </Page>

          <Page path="/fitztastic">
            <div className="page" style={{ backgroundColor: 'red' }}>
              <Skeleton>
                <Fitztastic />
              </Skeleton>
            </div>
          </Page>
        </Nav>
        <Footer />

      </div>
    );
  }
}
export default App