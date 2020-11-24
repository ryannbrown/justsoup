import React, { Component } from "react";
import "./style.css";
var _ = require("lodash");
export default class SideNav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      location: 1,
    };
  }

  componentDidMount() {

    var height = window.innerHeight - 200;

    // if (window.innerHeight > 900) {
    //   var height = window.innerHeight - 250;
    // } else {
    //   var height = window.innerHeight - 100;
    // }
    // console.log(window.innerHeight, height);
    var height2 = height + height;
    var height3 = height2 + height;
    var height4 = height3 + height;

    window.addEventListener(
      "resize",
      _.debounce(() => {
        height = window.innerHeight;

        // if (window.innerHeight > 900) {
        //   var height = window.innerHeight - 200;
        // } else {
        //   var height = window.innerHeight;
        // }
        height2 = height + height;
        height3 = height2 + height;
        height4 = height3 + height;
        // console.log("resizing", height, height2, height3, height4);
      }, 400)
    );

    document.addEventListener("scroll", () => {
      // console.log(window.scrollY);

      //   const isTop = window.scrollY < 100;
      if (window.scrollY <= height) {
        this.setState({ location: 1 });
      }
      if (window.scrollY > height && window.scrollY < height2) {
        this.setState({ location: 2 });
      }
      if (window.scrollY > height2 && window.scrollY < height3) {
        this.setState({ location: 3 });
      }
      if (window.scrollY > height3) {
        this.setState({ location: 4 });
      }
    });
  }

  //  <div className="side-nav-div">
  //       <a href="/#4"><FontAwesomeIcon style={{color:'#d2d2d2'}} className={this.state.location === 4 ? 'active-d' : 'inactive'} icon={faCircle}></FontAwesomeIcon></a>
  //       <p className={this.state.location === 4 ? ' animate__animated side-nav-text-active-d animate__bounceInLeft' : 'side-nav-text'}>Reach Out</p>
  //       </div>

  render() {
    return (
      <div>
        {/* <div className="pricing-btn-container">
          <a href={`/pricing`}>
            <button
              className={
                this.state.location === 2 || this.state.location === 3
                  ? "pricing-btn-inverted"
                  : "pricing-btn"
              }
            >
              Pricing
            </button>
          </a>
        </div> */}
        <div
          className="side-nav"
          style={{ display: "none", backgroundColor: "transparent" }}
        >
          <div className="side-nav-div">
            <a href="/#1">
              <div
                className={this.state.location === 1 ? "active-a" : "inactive"}
              >
                {this.state.location === 3 ? (
                  <p
                    className={
                      this.state.location === 1
                        ? " animate__animated side-nav-text-active-a animate__fadeOut"
                        : "side-nav-text-inverted"
                    }
                  >
                    Welcome
                  </p>
                ) : (
                  <p
                    className={
                      this.state.location === 1
                        ? " animate__animated side-nav-text-active-a animate__fadeOut"
                        : "side-nav-text"
                    }
                  >
                    Welcome
                  </p>
                )}
              </div>
            </a>
          </div>
          <div className="side-nav-div">
            <a href="/#2">
              <div
                className={this.state.location === 2 ? "active-b" : "inactive"}
              >
                {this.state.location === 3 ? (
                  <p
                    className={
                      this.state.location === 2
                        ? " animate__animated side-nav-text-active-b animate__fadeOut"
                        : "side-nav-text-inverted"
                    }
                  >
                    Who We Are
                  </p>
                ) : (
                  <p
                    className={
                      this.state.location === 2
                        ? " animate__animated side-nav-text-active-b animate__fadeOut"
                        : "side-nav-text"
                    }
                  >
                    Who We Are
                  </p>
                )}
              </div>
            </a>
          </div>
          <div className="side-nav-div">
            <a href="/#3">
              {" "}
              <div
                className={this.state.location === 3 ? "active-c" : "inactive"}
              >
                {this.state.location === 3 ? (
                  <p
                    className={
                      this.state.location === 3
                        ? " animate__animated side-nav-text-active-c animate__fadeOut"
                        : "side-nav-text-inverted"
                    }
                  >
                    Our Work
                  </p>
                ) : (
                  <p
                    className={
                      this.state.location === 3
                        ? " animate__animated side-nav-text-active-c animate__fadeOut"
                        : "side-nav-text"
                    }
                  >
                    Our Work
                  </p>
                )}
              </div>
            </a>
          </div>
          <div className="side-nav-div">
            <a href="/#4">
              <div
                className={this.state.location === 4 ? "active-d" : "inactive"}
              >
                {this.state.location === 3 ? (
                  <p
                    className={
                      this.state.location === 4
                        ? " animate__animated side-nav-text-active-d animate__fadeOut"
                        : "side-nav-text-inverted"
                    }
                  >
                    Services
                  </p>
                ) : (
                  <p
                    className={
                      this.state.location === 4
                        ? " animate__animated side-nav-text-active-d animate__fadeOut"
                        : "side-nav-text"
                    }
                  >
                    Services
                  </p>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
