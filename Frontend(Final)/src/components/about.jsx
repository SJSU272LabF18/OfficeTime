import React, { Component } from "react";
import Navbar2 from "./common/navbar2";
import './about.css';
class About extends Component {
  render() {
    return (
      <div className="home">
        <Navbar2 />
        <div className="aboutt1">
          We help you save something that never comes back..TIME!
        </div>
        <div className="about_us">
          <h2>Our Team</h2>
          <h3>Darryl Steve Ferdinands</h3>
          <h3>Sheena Gupta</h3>
          <h3>Shivam Tyagi</h3>
          <h3>Tarun Tyagi</h3>
        </div>
        <div className="heading-textt">
            <h2 className="wetellyou">
              We tell you the fastest day hour to commute to your destination
            </h2>
            <h2 className="bethespeed">BE THE SPEED YOU WISH TO SEE IN THE WORLD</h2>
          </div>
      </div>
    );
  }
}
export default About;