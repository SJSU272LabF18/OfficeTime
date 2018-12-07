import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper ,Polyline } from "google-maps-react";
import { VictoryBar, VictoryChart } from "victory";
import './problemStatement1.css';
import './home.css';
import axios from "axios";

//import { Line,Bar } from 'react-chartjs-2';
class ProblemStatement1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source : "",
      destination : "",
      time:[],
      cost:[],
      path:[],
      bestime:"",
      bestpath:[]
    };
     this.sourceclick = this.sourceclick.bind(this);
     this.destinationclick = this.destinationclick.bind(this);
     this.Calc = this.Calc.bind(this);
  }
sourceclick=(e)=>{
    this.setState({
      source:e.target.value
    })
    console.log("source",e.target.value)
  }
destinationclick=(e)=>{
    this.setState({
      destination:e.target.value
    })
    console.log("destination",e.target.value)
  }
Calc=(e)=> {
  axios.defaults.withCredentials = true;
  let postData;
  postData = {
    source: this.state.source,
    destination: this.state.destination,
  };
  console.log("postdata",postData)
  axios
      .post("http://localhost:3001/query", postData)
      .then(response => {
        console.log("Status Code : ", response.status);
        console.log("Time : ", response.data.time);
        console.log("Cost : ", response.data.cost);
        console.log("Route : ", response.data.route);
        this.state.time=response.data.time
        this.state.cost=response.data.cost
        this.state.path=response.data.route
        if (response.status === 200) {
          this.setState({
            authFlag: true
          });
        } else {
          this.setState({
            authFlag: false
          });
        }
      })
      .catch(err => {
        this.setState({ error: true });
        console.log(err);
      });
  }
  render() {
    
// var locations=[
//      { 1 : "martha" },
//      { 2 : "San Fernando 11th St"},
//      { 3: "S Market St"},
//      { 4: "Colmen Ave"},
//      { 5: "W Hedding St"},
//      { 6: "Airport Blvd"},
//      { 7: "De La Cruz Blvd"},
//      { 8: "Martin Ave"},
//      { 9: "Scott Blvd"},
//      { 10: "Walsh Ave"},
//      { 11: "Kifre Rd"},
//      { 12: "E Hardy Ave"},
//      { 13: "Google"},
//      { 14: "facebook"},
//      { 15: "Santa Clara 7th St"},
//      { 16 : "Bush St."},
//      { 17 : "Villa St"},
//      { 18: "Escuela Ave"},
//      { 19: "Rengstorff Ave"},
//      { 20: "Central Expy"},
//      { 21: "Mayfield Ave"},
//      { 22: "Whitney Dr"},
//      { 23: "Pheln Ave"},
//      { 24: "Xander's Crossing"},
//      { 25: "Bernal Rd"},
//      { 26: "Cottle Rd"},
//      { 27: "Internatinal Cir"},
//      { 28: "IBM"},
//      { 29: "33rd S 3rd S"},
//      { 30: "Joice Trail"},
//      { 31: "Santa Clara 7th St"},
//      { 32: "Mine Trail"},
//      { 33: "Harry Rd"},
//      { 34: "Bernal Rd"},
//      { 35: "Matrix Blvd"},
//      { 36: "N 1st St"},
//      { 37: "Xander's Crossing"},
//      { 38: "Mayfield Ave"},
//      { 39: "Escuela Ave"},
//      { 40: "Colmen Ave"},
//      { 41: "Bush St."},
//      { 42: "Chase Bank"},
//    ];

var locations=[
  "test",
     "Martha",
     "San Fernando 11th St",
     "S Market St",
      "Colmen Ave",
     "W Hedding St",
     "Airport Blvd",
      "De La Cruz Blvd",
     "Martin Ave",
      "Scott Blvd",
     "Walsh Ave",
     "Kifre Rd",
      "E Hardy Ave",
      "Google",
      "Facebook",
      "Santa Clara 7th St",
     "Bush St.",
      "Villa St",
      "Escuela Ave",
      "Rengstorff Ave",
     "Central Expy",
      "Mayfield Ave",
      "Whitney Dr",
     "Pheln Ave",
      "Xander's Crossing",
      "Bernal Rd",
     "Cottle Rd",
      "Internatinal Cir",
     "IBM",
      "33rd S 3rd S",
     "Joice Trail",
     "Santa Clara 7th St",
     "Mine Trail",
     "Harry Rd",
     "Bernal Rd",
     "Matrix Blvd",
      "N 1st St",
     "Xander's Crossing",
     "Mayfield Ave",
     "Escuela Ave",
     "Colmen Ave",
     "Bush St.",
     "Chase Bank",
   ];
    let graphTime =  this.state.time
    let graph = this.state.path;
    let graphCost= this.state.cost
    var sampleData=[]
    //-----------------------------------------------------------
    var lowest = Number.POSITIVE_INFINITY;
    var highest = Number.NEGATIVE_INFINITY;
    var tmp;
    var bestime;
    var bestpath=[]
    var pathtest=""
    for (var i=graphTime.length-1; i>=0; i--) {
    tmp = graphCost[i];
    if (tmp < lowest) {lowest = tmp; bestime=graphTime[i];bestpath=graph[i];}
    if (tmp > highest) highest = tmp;
          }
    console.log("test",highest,lowest,bestime,bestpath);
    for(var i=0;i<bestpath.length;i++){
      console.log("path test",locations[bestpath[i]])
      pathtest=pathtest+"-->"+locations[bestpath[i]]
    }
    console.log("path test",pathtest)
    
   //------------------------------------------------------------
    for (var i=0;i<graphTime.length;i++){
      sampleData.push({x:graphTime[i],y:graphCost[i]})
      console.log(sampleData)
    }
    console.log("complete data",graphTime,graph,graphCost)
    console.log(this.state.bestime,this.state.bestpath);
    let data1=(
      <div>
        <div className="homeBodyy3" style={{textAlign:"center"}}>
              Time based suggestions to avoid congestions during traffic
              hours.<br></br><b>Your best travel time is {bestime}:00 <br></br>{pathtest}-->{locations[this.state.destination]}</b><br></br>
              <b>Y Axis :  Cost (Time + Fuel)</b>
            </div>
          <VictoryChart domainPadding={{ x :10}}>
            <VictoryBar
              cornerRadius={10}
            barRatio={0.8}
            animate={{
  duration: 1000,
  onLoad: { duration: 800 }
}}
              style={{ data: { fill: "blue" },labels: { fill: "white" }  }}     
              data={sampleData}
            />
          </VictoryChart>
          <div className="homeBodyy3" style={{textAlign:"center"}}>
              <b>Time ( in 24hr format )</b>
          </div>
        </div>
    )
    
   
    const style = {
      width: "45vw",
      height: "35vw"
    };
    const pathCoordinates = [
      { lat: 36.05298765935, lng: -112.083756616339 },
      { lat: 36.2169884797185, lng: -112.056727493181 }
  ];
    return (
      <div className="home">
        <Navbar />
        <div className="problem1Body">Select a Source and Destination</div>
        <div className="subcomponent col-md-6">
            <div className="sourcebutton col-md-6">
            <h2 className="sourcetext">Source</h2>
            <input type="text" className ="inputbox" value={locations[this.state.source]}></input>
            <button className="martha" onClick={this.sourceclick} value="1">Martha 5th St</button>
            <button className="san" onClick={this.sourceclick} value="2">San Fernando 11th St</button>
            <button className="santa" onClick={this.sourceclick} value="15">Santa Clara 7th St</button>
            <button className="s33rd" onClick={this.sourceclick} value="29">33rd S 3rd St</button>
            </div>
            <div className="desitinationbutton col-md-6">
            <h2 className="sourcetext">Destination</h2>
            <input type="text" className ="inputbox" value={locations[this.state.destination]}></input>
            <button className="facebook" onClick={this.destinationclick} value="14">Facebook Office</button>
            <button className="ibm" onClick={this.destinationclick} value="28">IBM</button>
            <button className="google" onClick={this.destinationclick} value="13">Google Office</button>
            <button className="chase" onClick={this.destinationclick} value="42">Chase Bank</button>
            </div>
            <br>
            </br>
            <br></br>
          <button className="homeNex col-md-12">
          <Link
            className="homeNext_tex"
            to={{
              pathname: "/problem1"
            }}
          >
          <div className="clicktosee" onClick={this.Calc}>
            Click to see the best travel time
            </div>
          </Link>
        </button>
        <div className="homeNex_coupon col-md-12">Get a $5 Chevron coupon on SignUp</div>
        <button className="homeNex col-md-12">
          <Link
            className="homeNext_tex"
            to={{
              pathname: "/login"
            }}
          >
            SignUp now to get your personalised travel time
          </Link>
        </button>
        
        
        </div>
        {/* <div className='emplty col-md-4'></div> */}
        <div className="linechart linechart3 col-md-6">
               {data1}
        </div>
        </div>
        
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCA81-0kQKRBGJ8ueJ7Z2_cHx2VDAwPROw"
})(ProblemStatement1)