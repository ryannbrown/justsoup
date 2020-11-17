import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Footer from "../../components/Footer/index.js";
import SideNav from "../../components/SideNav/index.js"
import Hero from "../../components/Hero";
import Brand from "../../components/Brand";
import Works from "../../components/Works";
import MobileWorks from "../../components/MobileWorks";
import Cta from "../../components/Cta";
import ScrollSnap from "scroll-snap";
var _ = require("lodash");

function callback() {
  console.log("snapped");
}

// const EasingFunctions = {
//   // no easing, no acceleration
//   linear: t => t,
//   // accelerating from zero velocity
//   easeInQuad: t => t*t,
//   // decelerating to zero velocity
//   easeOutQuad: t => t*(2-t),
//   // acceleration until halfway, then deceleration
//   easeInOutQuad: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
//   // accelerating from zero velocity 
//   easeInCubic: t => t*t*t,
//   // decelerating to zero velocity 
//   easeOutCubic: t => (--t)*t*t+1,
//   // acceleration until halfway, then deceleration 
//   easeInOutCubic: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
//   // accelerating from zero velocity 
//   easeInQuart: t => t*t*t*t,
//   // decelerating to zero velocity 
//   easeOutQuart: t => 1-(--t)*t*t*t,
//   // acceleration until halfway, then deceleration
//   easeInOutQuart: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
//   // accelerating from zero velocity
//   easeInQuint: t => t*t*t*t*t,
//   // decelerating to zero velocity
//   easeOutQuint: t => 1+(--t)*t*t*t*t,
//   // acceleration until halfway, then deceleration 
//   easeInOutQuint: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
// }

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      height: "100vh",
      forms: [],
      showBrand: false,
      isMobile: false,
      bigScreen:false
    };
    this.container = React.createRef();
  }

  bindScrollSnap = () => {
    const element = this.container.current;
    console.log("the element", element);
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      snapDestinationX: "0%",
      timeout: 1,
      duration: 1,
      // easing:EasingFunctions.easeInOutQuint
    });

    console.log(snapElement)
    console.log(callback)
    snapElement.bind(callback);
  }

  // componentDidUpdate() {
  //   this.bindScrollSnap();
  // }

  componentDidMount() {
    this.bindScrollSnap();

    let height = window.innerHeight + "px";
    // console.log(height);

    this.setState({
      height: height,
    });

    if (window.innerWidth < 667) {
      this.setState({
        isMobile: true,
      });
    }
    if (window.innerWidth > 1400) {
      this.setState({
        bigScreen: true,
      });
    }
    window.addEventListener("resize", () => {
      let height = window.innerHeight + "px";
      this.setState({
        height: height,
      });
    });
  }

  componentDidUpdate() {
    window.addEventListener(
      "resize",
      _.debounce(() => {
        if (window.innerWidth < 667) {
          this.setState({
            isMobile: true,
          });
        } else if (window.innerWidth > 667) {
          this.setState({
            isMobile: false,
          });
        }
      }, 400)
    );
  }
  showBrand = () => {
    this.setState({ showBrand: true });
  };
  hideBrand = () => {
    this.setState({ showBrand: false });
  };

  render() {
    const { showBrand, isMobile, bigScreen } = this.state;
    return (
      <div>
        {bigScreen && <SideNav/>}
  
        {showBrand ? (
          <Brand hideBrand={this.hideBrand}></Brand>
        ) : (
          <div id="container" ref={this.container}>
              <a id="1">
            <div className="page first-page">
              <Hero height={this.state.height}></Hero>
            </div>
            </a>
            <a id="2">
            <div className="page second-page">
              <About></About>
            </div>
            </a>
            <a id="3">
            <div className="page third-page">
              {isMobile ? (
                <MobileWorks showBrand={this.showBrand}></MobileWorks>
              ) : (
                <Works showBrand={this.showBrand}></Works>
              )}
            </div>
            </a>
            <a id="4">
            <div className="page fourth-page">
              <Cta></Cta>
            </div>
            </a>
            <div className="page fifth-page">
              <Footer></Footer>
            </div>
          </div>
        )}
      </div>
    );
  }
}
