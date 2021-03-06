import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  Spinner
} from "react-bootstrap";
// import App from "../../App"
import "./style.css";
// import doodle from "../../media/doodle.png"
import bhLogo from "../../media/bhlogo.png";
import ihLogo from "../../media/ihlogo.png";
import moonsLogo from "../../media/moonslogo.png";
import millieLogo from "../../media/millielogo.png";
import unbreakableLogo from "../../media/unbreakable.png"

export default class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoState: [],
      isMobile: false
    };
  }

  componentDidMount() {
    const logoList = [
      { logo: ihLogo, link: "https://www.idlehourcoffee.com/" },
      { logo: unbreakableLogo, link: "https://unbreakable.herokuapp.com" },
      { logo: moonsLogo, link: "https://thehavenwithin.com" },
      { logo: bhLogo, link: "http://blueheronculinary.com/" },
      { logo: millieLogo, link: "https://www.mgillustrated.com/" }
    ];

    this.setState({
      logoState: logoList
    });
  }

  render() {
    const logos = this.state.logoState.slice(0, 4).map((item, i) => (
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
          height: "398px",
          width: "254px",
          marginTop: "50px"
        }}
      >
        <a className="work-link" target="_blank" href={item.link}>
          <div className="opacity-filter"></div>
          <hr className="off-hr"></hr>
        </a>
      </div>
    ));

    return (
      <div className="works-component">
        <div className="off-box-parent">
         <h1>our work</h1>
         <div className="logo-box">
          {logos}
         </div>
          <p onClick={this.props.showBrand}>See more</p>
        </div>
      </div>
    );
  }
}
