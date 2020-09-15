import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";


export default class Cta extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {}

  scrollDown = () => {
    window.scrollTo(0, 850);
  };

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (<div className="child">
      <div className="cta-component">
        <div className="cta-content">
          <h1>work with us</h1>
          <p>Unbound by CMS's or set structures, we guarantee a completely personal experience and touch to your brand and website. We code our 
            websites from scratch with love. Tim mocks up your design, giving your brand that much needed spark. Ryan takes the dream and gives it flight by using the most modern and powerful web technologies (React, Javascript, AWS, Postgresql). If you have a brand that needs shaken up, or a new concept that you want to give wheels to, reach out to us, we'd love to take you there. 
          </p>
          <a href="mailto:team@justsoup.io?subject=Websites">
          <button className="soup-btn">Contact us</button>
          </a>
        </div>
      </div>
      </div>
    );
  }
}
