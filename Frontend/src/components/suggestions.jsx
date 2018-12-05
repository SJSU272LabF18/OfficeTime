import React, { Component } from "react";
import Navbar from "./common/navbar2";
import { VictoryChart, VictoryLine } from "victory";
import './suggestions.css';

class Suggestions extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="maincontainer col-md-12">
        
        <div className="textbody col-md-6">
          <h1>
            Our recommendations to you are shown in the graph. Use our model to
            save the time lost in traffic into making something more productive.<br></br>
            Don't let traffic kill your time.<br></br>Speed up your journey.
          </h1>
        </div>
        
        <div className="empty col-md-1">
        </div>
        <div className="chartdesign col-md-5">
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
      </div>
    );
  }
}

export default Suggestions;
