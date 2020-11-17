import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import arrow from "../../media/white-arrow.png";
import logo from "../../media/redlogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default class SideNav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      location:1
    };
  }


    componentDidMount() {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY)
           
        //   const isTop = window.scrollY < 100;
          if (window.scrollY <= 900 ) {
              this.setState({ location: 1 })
          }
          if (window.scrollY > 900 && window.scrollY < 2000) {
              this.setState({ location: 2 })
          }
          if (window.scrollY > 1750 && window.scrollY < 3000 ) {
              this.setState({ location: 3 })
          }
          if (window.scrollY > 2750 ) {
              this.setState({ location: 4 })
          }
        });
      }

  componentDidUpdate() {
  }

  render() {
    return (


        // <div className="side-nav" style={{backgroundColor:'transparent'}}>
        //     <div className="side-nav-div">
        //     <a href="/#1"><FontAwesomeIcon style={{color:'#d2d2d2'}} className={this.state.location === 1 ? 'active-a' : 'inactive'} icon={faCircle}></FontAwesomeIcon></a>
        //    <p className={this.state.location === 1 ? ' animate__animated side-nav-text-active-a animate__bounceInLeft' : 'side-nav-text'}>Just Soup</p>
        //     </div>
        //     <div className="side-nav-div">
        //     <a href="/#2"><FontAwesomeIcon style={{color:'#d2d2d2'}} className={this.state.location === 2 ? 'active-b' : 'inactive'} icon={faCircle}></FontAwesomeIcon></a>
        //     <p className={this.state.location === 2 ? ' animate__animated side-nav-text-active-b animate__bounceInLeft' : 'side-nav-text'}>Our Story</p>
        //     </div>
        //     <div className="side-nav-div">
        //     <a href="/#3"> <FontAwesomeIcon style={{color:'#d2d2d2'}} className={this.state.location === 3 ? 'active-c' : 'inactive'} icon={faCircle}></FontAwesomeIcon></a>
        //     <p className={this.state.location === 3 ? ' animate__animated side-nav-text-active-c animate__bounceInLeft' : 'side-nav-text'}>Work We have done</p>
        //     </div>
        //     <div className="side-nav-div">
        //     <a href="/#4"><FontAwesomeIcon style={{color:'#d2d2d2'}} className={this.state.location === 4 ? 'active-d' : 'inactive'} icon={faCircle}></FontAwesomeIcon></a>
        //     <p className={this.state.location === 4 ? ' animate__animated side-nav-text-active-d animate__bounceInLeft' : 'side-nav-text'}>Reach Out</p>
        //     </div>
        // </div>
        <div className="side-nav" style={{display: 'none', backgroundColor:'transparent'}}>
            <div className="side-nav-div">
            <a href="/#1"><div className={this.state.location === 1 ? 'active-a' : 'inactive'}></div></a>
            </div>
            <div className="side-nav-div">
            <a href="/#2"><div className={this.state.location === 2 ? 'active-b' : 'inactive'}></div></a>
            </div>
            <div className="side-nav-div">
            <a href="/#3"> <div className={this.state.location === 3 ? 'active-c' : 'inactive'}></div></a>
            </div>
            <div className="side-nav-div">
            <a href="/#4"><div className={this.state.location === 4 ? 'active-d' : 'inactive'}></div></a>
            </div>
        </div>
    );
  }
}
