import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Navbar />
        <button className="homeNext">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/problem1"
            }}
          >
            Next
          </Link>
        </button>
      </div>
    );
  }
}

export default Home;
