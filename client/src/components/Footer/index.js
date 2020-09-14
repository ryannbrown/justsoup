import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import logo from "../../media/blackwhitelogo.png"
import dots from "../../media/dots.png"
export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {}

  // componentDidUpdate() {
  //   document.removeEventListener("scroll", this.listener);
  // }

  render() {
    return (
   <div className="footer-component">
     <img className="dots" src={dots}></img>
        <div className="footer-content">
          <img src={logo}></img>
        </div>
        
      </div>
    );
  }
}
