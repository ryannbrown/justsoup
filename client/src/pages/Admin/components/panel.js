import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      data: [],
      isDataReturned: false
  
    };
    // this.handleDelete = this.handleDelete.bind(this);
  }

 

  fetchSubmissions() {
    fetch(`https://api.getform.io/v1/forms/23287?token=XA8TFd6vNdp0x438KBuEOTBpRe9FLoZWBcupOC5iCZxlxQ7otXJZ92kv2muJ`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        this.setState({
          data: json.data.submissions,
          isDataReturned: true
        });
      });
  }


 


  componentDidMount() {
    this.fetchSubmissions();
    console.log('mounted')
  }

  render() {

    if (this.state.isDataReturned) {
      var renderedData = this.state.data.map((item, i) => (
        <div className="submission" key={i}>
          <p>{item.Business_Name}</p>
          <p>{item.Completion_Date}</p>
          <p>{item.Description}</p>
          <p>{item.Name}</p>
          <p>{item.bowl_size}</p>
          <p>{item.phone}</p>
          <p>{item.submissionDate}</p>
          {/* <span>Key Name: {key}</span> */}
          {/* <span>Value: {this.state.data[key]}</span> */}
        </div>
      )
      )
    }

    return(
      <div>
        <div>
        <div className="left-btn-container">
          {/* <a href={`/${this.props.btnLink}`}>
            <button className="pricing-btn">{this.props.btnText}</button>
          </a> */}
          <a href="/">
            <FontAwesomeIcon className="left-arrow" icon={faChevronLeft} />
          </a>
        </div>
          <h1></h1>
          <div className="submission-wrapper">
          {renderedData}
          </div>
        </div>
        </div>
    )
  }
}
export default Panel;
