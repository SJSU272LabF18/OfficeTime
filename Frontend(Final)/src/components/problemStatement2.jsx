import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { VictoryBar, VictoryChart } from "victory";
import './problemStatement2.css';

class ProblemStatement2 extends Component {
  render() {
    var x=[1234,2048]
    return (
      <div className="home">
        <Navbar />
        <div className="problem col-md-5">
          <h1>Refer to the graph to check out your best travel time of the day.</h1>
        </div>
        <div className="col-md-2"></div>
        <div className="barChartt col-md-5">
          <VictoryChart domainPadding={40}>
            <VictoryBar
              style={{ data: { fill: "blue" } }}
              data={[
                { data1: "A", data2: x[0] },
                { data1: "B", data2: x[1] },
                { data1: "C", data2: 2600 },
                { data1: "D", data2: 9000 }
              ]}
              x="data1"
              y="data2"
            />
          </VictoryChart>
        </div>
        <button className="homeNe">
          <Link
            className="homeN"
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
