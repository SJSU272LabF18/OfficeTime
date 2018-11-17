import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";

class ProblemStatement2 extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <button className="problem2_signup">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/login"
            }}
          >
            Sign-up
          </Link>
        </button>
      </div>
    );
  }
}

export default ProblemStatement2;
