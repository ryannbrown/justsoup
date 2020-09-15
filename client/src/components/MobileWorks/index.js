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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class MobileWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoState: [],
      isMobile: false
    };
  }


  componentDidMount() {



    const logoList = [
      { logo: ihLogo,
        link:'https://www.idlehourcoffee.com/' },
      { logo: moonsLogo,
      link:'' },
      { logo: bhLogo,
      link:'http://blueheronculinary.com/' },
      { logo: millieLogo,
      link:'https://www.mgillustrated.com/' }
    
    ];

    this.setState({
      logoState: logoList
    });
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const logos = this.state.logoState.map((item, i) => (
     <div style={{
      backgroundSize: `120px`,
      backgroundColor:'white',
      backgroundRepeat: `no-repeat`,
      display: `flex`,
      alignItems: `center`,
      position: `relative`,
      height: "398px",
      width: "254px",
      marginTop: "50px"
     }}>
      <img className="mobile-works-img" src={item.logo}></img>
         <a className="work-link" target="_blank" href={item.link}>
         {/* <hr className="off-hr"></hr> */}
        {/* <div className="opacity-filter"></div> */}
        {/* <hr className="off-hr"></hr> */}
      </a>
      </div>
    ));

    return (
      <div className=" child w-parent">
        <div className="w-container">
          <h1>our work</h1>
          <Slider {...settings}>
         {logos}
          </Slider>
            <hr className="off-hr"></hr>
          <p onClick={this.props.showBrand}>See more</p>
        </div>
      </div>
    );
  }
}
