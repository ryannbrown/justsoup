import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import bhLogo from "../../media/bhlogo.png";
import ihLogo from "../../media/ihlogo.png";
import moonsLogo from "../../media/moonslogo.png";
import millieLogo from "../../media/millielogo.png";


export default class Brand extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      icons: [],
      logoState: []
    };
  }

  componentDidMount() {
    const logoList = [
      { logo: moonsLogo },
      { logo: bhLogo },
      { logo: millieLogo },
      { logo: ihLogo },
    ];

    this.setState({
      logoState: logoList,
    });
  }

  render() {
    const logos = this.state.logoState.map((item, i) => (
      <div
        className="off"
        style={{
          backgroundImage: `url(${item.logo})`,
          backgroundColor: "black",
          // backgroundBlendMode: `multiply`,
          opacity: "30%",
          backgroundPosition: `center`,
          backgroundSize: `contain`,
          backgroundRepeat: `no-repeat`,
          display: `flex`,
          alignItems: `center`,
          position: `relative`,
          height: "398px",
          width: "254px",
        }}>
        <hr className="off-hr"></hr>
      </div>
    ));

    return (
      <div className="brand-page">
        <div className="off-box-parent">
          <h1>our work</h1>
          {logos}
          <p onClick={this.props.showBrand}>See more</p>
        </div>
      </div>
    );
  }
}
