import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper ,Polyline } from "google-maps-react";
import './problemStatement1.css';
import axios from "axios";
class ProblemStatement1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source : "",
      destination : ""
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
            <input type="text" className ="inputbox" value={this.state.source}></input>
            <button className="martha" onClick={this.sourceclick} value="1">Martha 5th St</button>
            <button className="san" onClick={this.sourceclick} value="2">San Fernando 11th St</button>
            <button className="santa" onClick={this.sourceclick} value="31">Santa Clara 7th St</button>
            <button className="s33rd" onClick={this.sourceclick} value="4">33rd S 3rd St</button>
            </div>
            <div className="desitinationbutton col-md-6">
            <h2 className="sourcetext">Destination</h2>
            <input type="text" className ="inputbox" value={this.state.destination}></input>
            <button className="facebook" onClick={this.destinationclick} value="14">Facebook Office</button>
            <button className="ibm" onClick={this.destinationclick} value="13">IBM</button>
            <button className="google" onClick={this.destinationclick} value="42">Google Office</button>
            <button className="chase" onClick={this.destinationclick} value="21">Chase Bank</button>
            </div>
            <br>
            </br>
            <br></br>
          <button className="homeNex col-md-12">
          <Link
            className="homeNext_tex"
            to={{
              pathname: "/problem2"
            }}
          >
          <div className="clicktosee">
            Click to see your best travel time
            <button className="calc" onClick={this.Calc}>Click here</button>
            </div>
          </Link>
        </button>
        </div>
        <div className='emplty col-md-4'></div>
        <div className="sub-componentt col-md-4">
        <div className="google_mapp">
          <Map google={this.props.google} initialCenter={{
            lat: 37.335221,
            lng: -121.881216
          }} style={style} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
            <InfoWindow>
               {/* <div>
                <h1>San Jose</h1>
              </div>  */}
            </InfoWindow>
            
          </Map>
        </div>
        </div>
        </div>
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCA81-0kQKRBGJ8ueJ7Z2_cHx2VDAwPROw"
})(ProblemStatement1);