import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-home" href="/home">
          Traffic Assistant
        </a>

        <Link to="/login" className="login">
          Login
        </Link>

        <Link to="/about" className="about">
          About Us
        </Link>
      </nav>
    );
  }
}

export default Navbar;
