import React, { Component } from "react";

import { VictoryChart, VictoryLine } from "victory";

class PieChartExample extends Component {
  render() {
    return (
      <div>
        <VictoryChart domainPadding={40}>
          <VictoryLine
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
    );
  }
}

export default PieChartExample;
