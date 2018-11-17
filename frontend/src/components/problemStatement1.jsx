import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";

class ProblemStatement1 extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="problem1Body">Select a Source and Destination</div>
        <table className="sourceDestination" cellspacing="100">
          <tr>
            <td>
              <button className="source">Martha 5th St</button>
            </td>
            <td>
              <button className="destination">Facebook Office</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="source">San Fernando 11th St</button>
            </td>
            <td>
              <button className="destination">IBM Office</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="source">Santa Clara 7th St</button>
            </td>
            <td>
              <button className="destination">Google Office</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="source">33rd S 3rd St</button>
            </td>
            <td>
              <button className="destination">Chase Bank</button>
            </td>
          </tr>
        </table>
        <button className="homeNext">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/problem2"
            }}
          >
            Click to see your best travel time
          </Link>
        </button>
      </div>
    );
  }
}

export default ProblemStatement1;
