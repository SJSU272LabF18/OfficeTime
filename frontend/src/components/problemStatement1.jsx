import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import './problemStatement1.css';

class ProblemStatement1 extends Component {
  render() {
    const style = {
      width: "45vw",
      height: "35vw"
    };
    return (
      <div className="home">
        <Navbar />
        <div className="problem1Body">Select a Source and Destination</div>
        <div className="two-components col-md-12">
        <div className="subcomponent col-md-6">
        <table className="sourceDestination" cellspacing="100">
          <tr>
            <td>
              <button className="source martha">Martha 5th St</button>
            </td>
            <td>
              <button className="destination facebook">Facebook Office</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="source san">San Fernando 11th St</button>
            </td>
            <td>
              <button className="destination ibm">IBM Office</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="source santa">Santa Clara 7th St</button>
            </td>
            <td>
              <button className="destination google">Google Office</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="source s33rd">33rd S 3rd St</button>
            </td>
            <td>
              <button className="destination chase">Chase Bank</button>
            </td>
          </tr>
        </table>
        </div>
        <div className='emplty col-md-2'></div>
        <div className="sub-component col-md-4">
        <div className="google_map">
          <Map google={this.props.google} style={style} zoom={14}>
            <Marker name={"Current location"} />

            <InfoWindow>
              {/* <div>
                <h1>San Jose</h1>
              </div> */}
            </InfoWindow>
          </Map>
        </div>
        </div>
        </div>
        <button className="homeNext">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/problem2"
            }}
          >
            Click to see your best travel time
          </Link>
        </button>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCA81-0kQKRBGJ8ueJ7Z2_cHx2VDAwPROw"
})(ProblemStatement1);
