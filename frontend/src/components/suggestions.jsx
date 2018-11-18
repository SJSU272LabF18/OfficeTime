import React, { Component } from "react";
import Navbar from "./common/navbar";

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
        <div className="lineChart1">LineChart</div>
      </div>
    );
  }
}

export default Suggestions;
