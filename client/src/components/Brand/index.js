import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import leftArrow from "../../media/left-arrow.png"
import bhLogo from "../../media/bhlogo.png";
import ihLogo from "../../media/ihlogo.png";
import moonsLogo from "../../media/moonslogo.png";
import millieLogo from "../../media/millielogo.png";
import unbreakableLogo from "../../media/unbreakable.png"


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
      { logo: ihLogo,
        link:'https://www.idlehourcoffee.com/' },
        { logo: unbreakableLogo, link: "https://unbreakable.herokuapp.com" },
        
      { logo: moonsLogo,
      link:'' },
      { logo: bhLogo,
      link:'http://blueheronculinary.com/' },
      { logo: millieLogo,
      link:'https://www.mgillustrated.com/' }
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
          // opacity: "30%",
          backgroundPosition: `center`,
          backgroundSize: `120px`,
          backgroundRepeat: `no-repeat`,
          display: `flex`,
          alignItems: `center`,
          position: `relative`,
          width: "150px",
          height: "245.25px",
          marginTop: "50px"
        }}>
           <a className="work-link" target="_blank" href={item.link}>
          <div className="opacity-filter"></div>
        <hr className="off-hr"></hr>
        </a>
      </div>
    ));

    return (
      <div style={{
        backgroundColor: `rgb(23,23,23)`,
        zIndex: "2000",
        // position: `fixed`,
        width: `100%`,
        paddingBottom:`100px`
        // height: `100vh`,
      }} className="brand-page">
        <div className="brand-container">
         <img
            onClick={this.props.hideBrand}
            className="left-arrow"
            src={leftArrow}
          ></img>
          <h1>our work</h1>
          <div className="brand-icon-box">
          {logos}
            
          </div>
        </div>
      </div>
    );
  }
}
