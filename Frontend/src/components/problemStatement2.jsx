import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { VictoryBar, VictoryChart } from "victory";
import './problemStatement2.css';

class ProblemStatement2 extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="problem col-md-5">
          <h1>This graph will show the commute time at different day hours.</h1>
        </div>
        <div className="col-md-2"></div>
        <div className="barChartt col-md-5">
          <VictoryChart domainPadding={40}>
            <VictoryBar
              style={{ data: { fill: "blue" } }}
              data={[
                { data1: "A", data2: 1234 },
                { data1: "B", data2: 2048 },
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
