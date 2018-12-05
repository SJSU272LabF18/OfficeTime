import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../common/navbar2.css';
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: true,
      error: false
    };
    this.handlelogout = this.handlelogout.bind(this);
  }
  handlelogout = event =>{
    event.preventDefault();
    console.log('frontend', window.localStorage.getItem('email'));
    const data = {
      email : window.localStorage.getItem('email')
    }
    axios.post('http://localhost:3001/logout', data).then(response => {
      if (response.status === 200) {
        this.setState({
          authFlag: false
        });
        console.log(this.state.authFlag)
      } else {
        this.setState({
          authFlag: true
        });
      }
    })
    .catch(err => {
      this.setState({ error: true });
      console.log(err);
    });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-home" href="/home">
          Traffic Assistant
        </a>

        <a className = "Logoutbutton" href="#" onClick={this.handlelogout}>Logout</a>

        <Link to="/about" className="aboutt">
          About Us
        </Link>
      </nav>
    );
  }
}

export default Navbar;
