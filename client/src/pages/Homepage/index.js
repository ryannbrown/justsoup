import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import About from "../../components/About"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Hero from "../../components/Hero";
import Brand from "../../components/Brand";
import Works from "../../components/Works";
import Cta from "../../components/Cta";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      forms: [],   
       showBrand: false
    };
  }

  componentDidMount() {
    // this.fetchPosts();
  }

showBrand = () => {
    this.setState({showBrand: true})
}
hideBrand = () => {
    this.setState({showBrand: false})
}


  render() {
    const {showBrand} = this.state;
    return (
      <div className="home-page">
        {showBrand && 
        <Brand></Brand>}
        <Hero></Hero>
        <About></About>
        <Works showBrand={this.showBrand}></Works>
        <Cta></Cta>
      </div>
    );
  }
}
