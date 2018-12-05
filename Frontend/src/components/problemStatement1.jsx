import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper ,Polyline } from "google-maps-react";
import './problemStatement1.css';

class ProblemStatement1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourcename : "",
      destinationname : ""
    };
    // this.sourceclick = this.sourceclick.bind(this);
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
            <input type="text" className ="inputbox"></input>
            <button className="martha" onClick={this.sourceclick} >Martha 5th St</button>
            <button className="san" onClick={this.sourceclick}>San Fernando 11th St</button>
            <button className="santa" onClick={this.sourceclick}>Santa Clara 7th St</button>
            <button className="s33rd" onClick={this.sourceclick}>33rd S 3rd St</button>
            </div>

            <div className="desitinationbutton col-md-6">
            <h2 className="sourcetext">Destination</h2>
            <input type="text" className ="inputbox"></input>
            <button className="facebook" onClick={this.destinationclick}>Facebook Office</button>
            <button className="ibm" onClick={this.destinationclick}>IBM</button>
            <button className="google" onClick={this.destinationclick}>Google Office</button>
            <button className="chase" onClick={this.destinationclick}>Chase Bank</button>
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
