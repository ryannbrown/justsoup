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
var _ = require("lodash");

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
  }

  componentDidMount() {
    let height = window.innerHeight + "px";
    // console.log(height);

    this.setState({
      height: height
  })

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
      },400)
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
      <div className="home-page">
        {showBrand ? (
          <Brand hideBrand={this.hideBrand}></Brand>
        ) : (
          <div>
            <Hero height={this.state.height}></Hero>
            <About></About>
            {isMobile ? (
              <MobileWorks showBrand={this.showBrand}></MobileWorks>
            ) : (
              <Works showBrand={this.showBrand}></Works>
            )}
            <Cta></Cta>
            <Footer></Footer>
          </div>
        )}
      </div>
    );
  }
}
