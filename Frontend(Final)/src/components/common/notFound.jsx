import React, { Component } from "react";
import Navbar from "./navbar";

class NotFound extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <p className="notfound">The page you have requested does not exist.</p>
      </div>
    );
  }
}

export default NotFound;
