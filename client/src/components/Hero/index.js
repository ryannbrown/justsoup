import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import arrow from "../../media/white-arrow.png";
import logo from "../../media/redlogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {
 
  }

  scrollDown = () => {
    window.scrollTo(0, 850);
  };

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (


        <div style={{
          height:`${this.props.height}`,
          
        }} className="home-hero">
          <div>
          <img src={logo}></img>
          </div>
         
        </div>
    );
  }
}
