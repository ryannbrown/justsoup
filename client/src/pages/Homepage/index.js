import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import About from "../../components/About"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Footer from "../../components/Footer/index.js"
import Hero from "../../components/Hero";
import Brand from "../../components/Brand";
import Works from "../../components/Works";
import MobileWorks from "../../components/MobileWorks";
import Cta from "../../components/Cta";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      forms: [],   
       showBrand: false,
       isMobile:false
    };
  }

  componentDidMount() {
  
    if (window.innerWidth < 667) {
      this.setState({
        isMobile: true
      })
    }
  }

showBrand = () => {
    this.setState({showBrand: true})
}
hideBrand = () => {
    this.setState({showBrand: false})
}


  render() {
    const {showBrand, isMobile} = this.state;
    return (
      <div className="home-page">
        {showBrand ? 
        <Brand hideBrand={this.hideBrand}></Brand> : <div>
        <Hero></Hero>
        <About></About>
        {isMobile? <MobileWorks showBrand={this.showBrand}></MobileWorks>
        :<Works showBrand={this.showBrand}></Works> }
        <Cta></Cta>
        <Footer></Footer>
        </div>
        }
      </div>
    );
  }
}
