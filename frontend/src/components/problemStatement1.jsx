import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";

class ProblemStatement1 extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <button className="homeNext">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/problem2"
            }}
          >
            Next
          </Link>
        </button>
      </div>
    );
  }
}

export default ProblemStatement1;
