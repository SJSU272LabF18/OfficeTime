import React, { Component } from "react";
import Navbar from "./common/navbar2";
import { VictoryChart, VictoryBar } from "victory";
import './suggestions.css';

class Suggestions extends Component {

 render() {
  if(localStorage.getItem("companyname")==="Google") {
  var sampledata=[
    { x: "7", y: 0.5 },
    { x: "8", y: 1 },
    { x: "9", y: 3 },
    { x: "10", y: 2.5},
    { x: "11", y: 1.6 },
    { x: "12", y: 0.8 },
    { x: "13", y: 0 },
    { x: "14", y: 0},
    { x: "15", y: 0 },
    { x: "16", y: 1 },
    { x: "17", y: 1.5 },
    { x: "18", y: 3.6},
    { x: "19", y: 3.2 },
    { x: "20", y: 2.4 },
    { x: "21", y: 1.6 },
  ];
var datadisplayed=(
  <b>Your best travel time is 7</b>
)}else{
  sampledata=
    [
      { x: "7", y: 1.2 },
      { x: "8", y: 0.8 },
      { x: "9", y: 3.7 },
      { x: "10", y: 3},
      { x: "11", y: 2.2 },
      { x: "12", y: 0.9 },
      { x: "13", y: 0 },
      { x: "14", y: 0},
      { x: "15", y: 0 },
      { x: "16", y: 0.5 },
      { x: "17", y: 2 },
      { x: "18", y: 3},
      { x: "19", y: 3.5 },
      { x: "20", y: 2.5 },
      { x: "21", y: 1.2 },
    ];
    datadisplayed=(
      <b>Your best travel time is 8</b>
    )
  }
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

       <div className = "piechart piechart1 col-md-6" style={{borderRadius:"15px"}}>
       <div>
       
      <div className="homeBodyy3" style={{textAlign:"center"}}>
            Your personal Time based suggestions to avoid congestions during traffic
            hours.<br></br>{datadisplayed}<br></br><br></br>
            <b>Y Axis :  Cost (Time + Fuel)</b>
          </div>
        <VictoryChart domainPadding={{ x :10}}>
          <VictoryBar
            cornerRadius={9}
          barRatio={0.8}
          animate={{
           duration: 2000,
           onLoad: { duration: 800 }
           }}
           categories={{
             y: ["2,000", "4,000", "6,000","8,000"]
           }}
            style={{ data: { fill: "blue" },labels: { fill: "white" }  }}
            data={sampledata}
          />
        </VictoryChart>
        <div className="homeBodyy3" style={{textAlign:"center"}}>
            <b>Time ( in 24hr format )</b>
        </div>
      </div>
      </div>
       </div>
     </div>
   );
 }
}

export default Suggestions;