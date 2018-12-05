import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { VictoryPie, VictoryChart, VictoryLine } from "victory";
import './home.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className = "mainbar col-md-12">
        <div className = "piechart piechart1 col-md-4">
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
        <div className = "text-data col-md-4">
          <div className="heading-text">
            <h1 className="trafficdata">Traffic Data Analysis</h1>
            <h3 className="wetell">
              We tell you the fastest day hour to commute to your destination
            </h3>
            <h4 className="bethe">BE THE SPEED YOU WISH TO SEE IN THE WORLD</h4>
            </div>
            <div className="homeBodyy2">
              Time Companies are wasting due to traffic congestions during traffic
              hours
            </div>
        </div>
         <div className="linechart linechart2  col-md-4">
          {" "}
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
        <div className="homeBodyy">
          Graphical representation of Data Analysis
        </div>
        <div className="buttoncontainer">
        <button className="homeNextt">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/solution"
            }}
          >
          <div className="homeNexttext">
            Click to know our solution to the problem
            </div>
          </Link>
        </button>
        </div>
        </div>





        /* <div className="homeBody">
          <h1>Traffic Data Analysis</h1>
          <h3>
            We tell you the fastest day hour to commute to your destination
          </h3>
          <h4>BE THE SPEED YOU WISH TO SEE IN THE WORLD</h4>
        </div>
        <div className="pieChart piechart-home">
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
        <div className="lineChart">
          {" "}
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
          </button> */
      
    );
  }
}

export default Home;
