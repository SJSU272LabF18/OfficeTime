import React, { Component } from "react";
import Navbar from "./common/navbar";

class About extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="about">
          <h2>Our Team</h2>
          <h4>Darryl Steve Ferdinands</h4>
          <h4>Sheena Gupta</h4>
          <h4>Shivam Tyagi</h4>
          <h4>Tarun Tyagi</h4>
        </div>
        <div className="about1">
          We help you save something that never comes back..TIME!
        </div>
      </div>
    );
  }
}

export default About;
