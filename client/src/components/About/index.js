import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import wordmarkWhite from '../../media/wordmarkWhite.png'
import dots from "../../media/dots.png"

export default class About extends Component {
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
        <div className=" about-component">
             <img className="dots" src={dots}></img>
          <div className="about-content">
            <div>
                <p>We are</p>
                <img src={wordmarkWhite}></img>
            </div>
            <div>Two creative spirits who love to make things, and make them look good. We have Tim, who has a timeless love for all things Vietnam, coffee, and and mid-century designs. And we have Ryan, who is the ultimate enthusiast, has traveled all over and is always looking for more, is passionate about people and seeing their dreams be fully realized. A former colleague of Ryan and Tim's would always say that Pho was just soup. The irony of Pho being 'just soup' started the bond, because to Ryan and Tim that couldn't be more ridiculous. Now Ryan and Tim are looking at brands as more than just brands... craving to change the landscape and make businesses more than they ever dreamed.</div>
          </div>
         
        </div>
   
    );
  }
}
