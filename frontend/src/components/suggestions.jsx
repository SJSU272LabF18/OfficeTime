import React, { Component } from "react";
import Navbar from "./common/navbar";
import { VictoryChart, VictoryLine } from "victory";

class Suggestions extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="problem2Body">
          <h1>
            Our recommendations to you are shown in the graph. Use our model to
            save the time lost in traffic into making something more productive.
            Don't let traffic kill your time. Speed up your journey.
          </h1>
        </div>
        <div className="lineChart1">
          <VictoryChart>
            <VictoryLine
              style={{ data: { fill: "blue" } }}
              data={[
                { x: "A", y: 1234 },
                { x: "B", y: 2048 },
                { x: "C", y: 2600 },
                { x: "D", y: 9000 }
              ]}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default Suggestions;
