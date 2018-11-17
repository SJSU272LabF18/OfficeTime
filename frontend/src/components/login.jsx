import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="login_img">
          <img
            src={require("../images/traffic.jpg")}
            alt="Couldn't found anything"
            className="traffic_img"
          />
        </div>
        <div className="login_body">
          <h1>Login</h1>
          <br />
          <button className="social_media">
            <a className="btn btn-block btn-social btn-facebook">
              <span className="fa fa-facebook" /> &nbsp; &nbsp; &nbsp;
              <span>Facebook</span>
            </a>
          </button>
          <button className="social_media">
            <a className="btn btn-block btn-social btn-google">
              <span className="fa fa-google" /> &nbsp; &nbsp; &nbsp;
              <span>Google</span>
            </a>
          </button>
          <button className="social_media">
            <a className="btn btn-block btn-social btn-twitter">
              <span className="fa fa-twitter" /> &nbsp; &nbsp; &nbsp;
              <span>Twitter</span>
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
