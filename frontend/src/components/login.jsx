import React, { Component } from "react";
import Navbar from "./common/navbar";
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import {Redirect} from 'react-router';
import '../components/Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
       this.state = {
       authFlag: false,
       error : false
};
this.signup = this.signup.bind(this);
}

signup(res, type) {
     let postData;
     if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
  }
  console.log(postData);
  
  axios.defaults.withCredentials = true;
  axios.post('http://localhost:3001/login',postData).then(response => {
    console.log("Status Code : ",response.status);
    if(response.status === 200){
      this.setState({
        authFlag : true
      })
    }else{
      this.setState({
        authFlag : false
      })
    }
  }).catch(err => {
    this.setState({error : true});
    console.log(err);
  });

}
  render() {
    const responseGoogle = (response) => {
      this.signup(response, 'google')
    }    
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
          <div className = "google">
          <GoogleLogin
            clientId="405511051479-khfrjurgb9v41p0g77ic97q6qttomvub.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            theme = "dark"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
