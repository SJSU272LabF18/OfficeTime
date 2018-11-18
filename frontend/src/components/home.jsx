import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { VictoryPie, VictoryChart, VictoryLine } from "victory";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="homeBody">
          <h1>Traffic Data Analysis</h1>
          <h3>
            We tell you the fastest day hour to commute to your destination
          </h3>
          <h4>BE THE SPEED YOU WISH TO SEE IN THE WORLD</h4>
        </div>
        <div className="pieChart">
          {" "}
          <VictoryPie
            colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
            data={[
              { x: "A", y: 1234 },
              { x: "B", y: 2048 },
              { x: "C", y: 2600 },
              { x: "D", y: 9000 }
            ]}
          />
        </div>
        <div className="homeBody2">
          Time Companies are wasting due to traffic congestions during traffic
          hours
        </div>
        <div className="lineChart"> LineChart</div>
        <br />
        <div className="homeBody3">
          Graphical representation of Data Analysis
        </div>
        <button className="homeNext">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/solution"
            }}
          >
            Click to know our solution to the problem
          </Link>
        </button>
      </div>
    );
  }
}

export default Home;
