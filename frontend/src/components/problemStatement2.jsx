import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";

class ProblemStatement2 extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="problem2Body">
          <h1>This graph will show the commute time at different day hours.</h1>
        </div>
        <div className="barChart">BarChart</div>
        <button className="homeNext">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/login"
            }}
          >
            Proceed for Login
          </Link>
        </button>
      </div>
    );
  }
}

export default ProblemStatement2;
