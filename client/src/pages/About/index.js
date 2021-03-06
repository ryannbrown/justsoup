import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import whiteArrow from "../../media/whitearrow.png";
import { Hidden } from "@material-ui/core";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      forms: []
    };
  }

  fetchPosts() {}

  componentDidMount() {}

  render() {
    return (
      <div className="about-page">
        {/* <Navigation
          color="#FF8686"
          scrolledBgColor="#FF8686"
          scrolledColor="white"
    
          // logo={pinkLogo}
          scrollDistance="120"
          arrow={whiteArrow}
        /> */}
        <div className="about-content">
          <div className="white-block">
            <div className="img-container">
              <div
                className="about-img"
                style={{
                  // backgroundImage: `url(${mill})`,
                  // backgroundColor: `#FF8686`,
                  // opacity: `90%`,
                  // backgroundBlendMode: `lighten`,
                  backgroundPosition: `center`,
                  position: `relative`,
                  overflow: `hidden`,
                  // backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  // backgroundAttachment: `fixed`,
                  height: `75vh`,
                  width: `95%`,
                  marginBottom: `-25%`,
                  position: "absolute",
                  top: "35%",
                  marginLeft: "10px"
                  // background: `linear-gradient(to top, transparent 10%, #ffffff )`
                  // display: `flex`,
                  // alignItems: `center`,
                  // position: `relative`
                  //   cover no-repeat center center fixed`
                }}
              >
                {/* <Image className="about-img" width="400px" src={mill}></Image> */}
                {/* <Image className="about-logo" src={pinkLogo}></Image> */}
              </div>
            </div>
          </div>
          <div className="pink-block">
            <div className="narrow">
              {/* <div className="about-greeting">
              <h1>Hi There!</h1>
              <p>
                Welcome to my blog of creative work. My name is Millicent, but I
                go by Millie. I am from Charlotte, North Carolina, and I work
                remotely in Northern California as a full-time illustrator. I am
                passionate about writing, illustration, art and fashion. This
                serves as a place for me to show you the person behind my
                writing and designs, and I hope that you will feel inspired by
                it. Thank you for your time, and I look forward to sharing with
                you a more intimate look at my creations. Sincerely, Millie
              </p>
            </div> */}
            </div>
            <div className="about">
              <h1>Hi There!</h1>
              <p>
                Welcome to my blog of creative work. My name is Millicent, but I
                go by Millie. I am from Charlotte, North Carolina, and I work
                remotely in Northern California as a full-time illustrator. I am
                passionate about writing, illustration, art and fashion. This
                serves as a place for me to show you the person behind my
                writing and designs, and I hope that you will feel inspired by
                it. Thank you for your time, and I look forward to sharing with
                you a more intimate look at my creations. Sincerely, Millie
              </p>
            </div>
          </div>
          <div className="white-block">
            <div className="about-contact">
              <h1>Feel free to reach out!</h1>
              <p>
                Contact me anytime, just shoot me an email at:{" "}
                <span>illustrations@gmail.com</span>
              </p>
              <p>
                Follow on Instagram: <span>@instagram </span>
                Facebook: <span>@facebook</span>
              </p>
              <p>
                To download my resume, click the link! <span>Millie.pdf</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
