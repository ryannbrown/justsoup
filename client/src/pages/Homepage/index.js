import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import About from "../../components/About"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Hero from "../../components/Hero";
import Works from "../../components/Works";
import Cta from "../../components/Cta";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      forms: [],
    };
  }

  fetchPosts() {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json.data);
        this.setState({
          posts: json.data,
        });
      });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div className="home-page">
        <Hero></Hero>
        <About></About>
        <Works></Works>
        <Cta></Cta>
      </div>
    );
  }
}
