import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { VictoryChart, VictoryLine, VictoryBar,VictoryLabel,VictoryArea } from "victory";
import './home.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className = "mainbar col-md-12">
        
        <div className="linechart linechart2  col-md-4">
          {" "}
          <div className="homeBodyy3" style={{textAlign:"center"}}>
              Money being wasted due to traffic congestions during traffic
              hours.<br></br>In the U.S. alone, congestion cost <b>$305 billion</b> last year, an <b>increase of $10 billion</b> from 2016.<br></br><br></br>
              <b>Y Axis : Total Cost to the City ( Yearly )</b>
            </div>
          <VictoryChart
          domainPadding={{ x :30}}>
            <VictoryBar
            cornerRadius={15}
            barRatio={0.8}
            animate={{
  duration: 2000,
  onLoad: { duration: 1000 }
}}
categories={{ y: ["$" + "6.3" + "b", "$"+"10.6"+ "b", "$"+"19.2"+ "b","$"+"33.7"+ "b"] }}
              style={{ data: { fill: "blue" },labels: { fill: "white" }  }}
              data={[
                { x: "Los Angeles", y:  3 },
                { x: "New York City", y:  4 },
                { x: "San Francisco", y:  2 },
                { x: "Miami", y:  1  }
              ]}
            />
          </VictoryChart>
          <div className="homeBodyy3" style={{textAlign:"center"}}>
              Source : Transportation consulting firm INRIX.
            </div>
         </div> 
        <div className = "text-data col-md-4">
          <div className="heading-text">
            <h1 className="trafficdata">Traffic Data Analysis</h1>
            <h3 className="wetell">
              Analysis of Time and Money being wasted because of Traffic
            </h3>
            <div className="buttoncontainer">
        <button className="homeNextt" style={{marginTop:"50px",textDecoration:"none"}}>
          <Link
            className="homeNext_text" style={{textDecorationLine:"none"}}
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
           
        </div>
         <div className="linechart linechart2  col-md-4">
          {" "}
          <div className="homeBodyy3" style={{textAlign:"center"}}>
              Time being wasted due to traffic congestions during traffic
              hours.<br></br>On average, Americans spent 2 hours a week stuck in traffic on their commutes in 2017.<br></br><br></br>
              <b>Y Axis : Peak Hours Spent in Congestion ( Yearly )</b>
            </div>
            <VictoryChart
          domainPadding={{ x :30}}>
            <VictoryBar
            cornerRadius={15}
            barRatio={0.8}
            animate={{
  duration: 2000,
  onLoad: { duration: 1000 }
}}
              style={{ data: { fill: "blue" },labels: { fill: "white" }  }}
              data={[
                { x: "Los Angeles", y:  102 },
                { x: "New York City", y:  91 },
                { x: "San Francisco", y:  79 },
                { x: "Miami", y:  64  }
              ]}
            />
          </VictoryChart>
          <div className="homeBodyy3" style={{textAlign:"center"}}>
              Source : Transportation consulting firm INRIX.
            </div>
         </div>     
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
