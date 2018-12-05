import React, { Component } from "react";
import Navbar from "./common/navbar";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import './Login.css';
import { Redirect } from "react-router";
import { FacebookLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: false,
      error: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {
    let postData;
    if (type === "google" && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    window.localStorage.setItem("email", postData.email);
    console.log(postData.email);
    console.log("postdata",postData)  
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/login", postData)
      .then(response => {
        console.log("Status Code : ", response.status);
        window.localStorage.setItem("token", postData.token)
        if (response.status === 200) {
          this.setState({
            authFlag: true
          });
          console.log(this.state.authFlag)
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
    const responseGoogle = response => {
      this.signup(response, "google");
    };
    let redirectVar = null;
    if (this.state.authFlag) {
      redirectVar = (
        <Redirect
          to={{
            pathname: "/companyform"
          }}
        />
      );
    }
    return (
      <div className="home">
        <Navbar />
        {redirectVar}
        <div className="login__img col-md-6">
          <img
            src={require("../images/traffic.jpg")}
            alt="Couldn't found anything"
            className="traffic_img"
          />
        </div>
        <div className="login_body col-md-6">
          <div className="text__login">
          <h1>Login</h1>
          </div>
          <br />
          <br />
          <div className="googlee">
            <GoogleLogin
              clientId="405511051479-khfrjurgb9v41p0g77ic97q6qttomvub.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              theme="dark"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
          <div className="twitter">
          <TwitterLoginButton>
          <span className="twittertext">Sign In with Twitter</span>
          </TwitterLoginButton>
          </div>
          <div className="faceboook">
           <FacebookLoginButton>
            <span className="facebooktext">Facebook Sign In</span>
          </FacebookLoginButton>
          </div>
          <div className="linkedin">
          <LinkedInLoginButton>
          <span className="linkedintext">LinkedIn Sign In</span>
          </LinkedInLoginButton>>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
