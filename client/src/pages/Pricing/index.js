import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
require("dotenv").config();

export default class Pricing extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      icons: [],
      logoState: [],
    };
  }

  scrollDown = () => {
    window.scrollTo(0, 1500);
  };
  componentDidMount() {}

  render() {
    const formLink =
      "https://getform.io/f/ea77b207-e8f0-4607-8261-febb2f7de409";
    // const logos = this.state.logoState.map((item, i) => (

    return (
      <div className="pricing-container">
        <div className="left-btn-container">
          {/* <a href={`/${this.props.btnLink}`}>
            <button className="pricing-btn">{this.props.btnText}</button>
          </a> */}
          <a href="/">
            <FontAwesomeIcon className="left-arrow" icon={faChevronLeft} />
          </a>
        </div>
        <h1>Pricing Plans</h1>
        <div className="bowl-wrapper">
          <div className="bowl">
            <h1>
              <span>Small</span> Bowl
            </h1>
            <p>
              <strong>Starting at $999-$3k</strong>
            </p>
            <p>Basic branding</p>
            <p>Blogs, portfolios, storefronts</p>
            <p>Basic form handling</p>
            <p>
              <hr
                style={{
                  width: "33px",
                  borderBottom: ".5px solid #171717",
                  opacity: ".3",
                  margin: "20px 0px",
                }}
              ></hr>
            </p>
            <p>
              <hr
                style={{
                  width: "33px",
                  borderBottom: ".5px solid #171717",
                  opacity: ".3",
                  margin: "20px 0px",
                }}
              ></hr>
            </p>
          </div>
          <div className="bowl">
            <h1>
              <span>Big</span> Bowl
            </h1>
            <p>
              <strong>Starting at $3.5k-$7k</strong>
            </p>
            <p>Advanced branding</p>
            <p>Optional Gatsby integration</p>
            <p>Advanced form handling</p>
            <p>Basic API integrations</p>
            <p>Basic ecommerce solutions </p>
          </div>
          <div className="bowl">
            <h1>
              <span>Bigger</span> Bowl
            </h1>
            <p>
              <strong>Starting at $8k</strong>
            </p>
            <p>Advanced branding</p>
            <p>Optional Gatsby integration</p>
            <p>Advanced form handling</p>
            <p>Advanced API integrations</p>
            <p>Full ecommerce solutions</p>
          </div>
          {/* <hr></hr> */}
        </div>
        <div className="forward-btn-container">
          <button onClick={this.scrollDown} className="pricing-btn">
            Want to move forward?
          </button>
          <FontAwesomeIcon className="down-arrow" icon={faChevronDown} />
        </div>

        <div className="form-container">
          <h1>Your new site awaits</h1>
          <div className="actual-form">
            <form action={formLink} method="POST">
              <div className="form-col-1">
                <div className="form-fam">
                  <p>Business Name</p>
                  <input
                    type="text"
                    name="Business Name"
                    placeholder="i.e Sally's Cupcakes"
                  />
                </div>
                <div className="form-fam">
                  <p>Contact Name*</p>
                  <input
                    type="text"
                    name="Name"
                    placeholder="i.e Sally Smith"
                  />
                </div>
                <div className="form-fam">
                  <p>
                    Basic description of what you want your website to be able
                    to do*
                  </p>
                  <textarea
                    type="text"
                    name="Description"
                    placeholder="i.e Secure Forms, CMS, Ecommerce for my 
                    cupcakes, Ability to post Blogs..."
                  />
                </div>
              </div>
              <div className="form-col-2">
                <div className="form-fam">
                  <p>Contact email*</p>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="i.e sally.smith@gmail.com"
                  />
                </div>
                <div className="form-fam">
                  <p>Contact number*</p>
                  <input
                    required
                    type="text"
                    name="phone"
                    placeholder="123-456-7890"
                  />
                </div>
                <div className="form-fam">
                  <p>Desired bowl size*</p>
                  <select required name="bowl size">
                    <option className="first-option">Pick Bowl Size</option>
                    <option>Small Bowl | $999-$3,000</option>
                    <option>Big Bowl | $3,500-$7,000</option>
                    <option>Bigger Bowl | $8,000-$10,000</option>
                  </select>
                </div>
                <div className="form-fam">
                  <p>Rough date website needs to be finished</p>
                  <input
                    type="date"
                    name="Completion Date"
                    // placeholder="mm/dd/yyyy"
                  />
                </div>
              </div>
              <p className="pricing-text">
                If you feel like this form is unable to pinpoint a rough idea of
                what you want, feel free to call us at{" "}
                <a href="tel:9198165074">919-816-5074</a>
              </p>
              <button className="pricing-btn" type="submit">
                Send Our Way
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
