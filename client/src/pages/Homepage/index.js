import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Footer from "../../components/Footer/index.js";
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
    };
    this.container = React.createRef();
  }

  bindScrollSnap = () => {
    const element = this.container.current;
    console.log("the element", element);
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      snapDestinationX: "0%",
      duration: 100,
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
    const { showBrand, isMobile } = this.state;
    return (
      <div>
        {showBrand ? (
          <Brand hideBrand={this.hideBrand}></Brand>
        ) : (
          <div id="container" ref={this.container}>
            <div className="page first-page">
              <Hero height={this.state.height}></Hero>
            </div>
            <div className="page second-page">
              <About></About>
            </div>
            <div className="page third-page">
              {isMobile ? (
                <MobileWorks showBrand={this.showBrand}></MobileWorks>
              ) : (
                <Works showBrand={this.showBrand}></Works>
              )}
            </div>
            <div className="page fourth-page">
              <Cta></Cta>
            </div>
            <div className="page fifth-page">
              <Footer></Footer>
            </div>
          </div>
        )}
      </div>
    );
  }
}
