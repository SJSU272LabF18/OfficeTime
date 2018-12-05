import React, { Component } from "react";
import Navbar from "./common/navbar2";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import './companyForm.css';

class CompanyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authFlag: false,
      companyname : "",
      department :"",
      homeaddress : "",
      companyaddress : "",
      timing : ""
    };
    // this.signup = this.signup.bind(this);
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    let className = `form-group ${touched && error ? "has-danger" : ""}`;
    if (field.label === "Company Timings") {
      return (
        <div className={className}>
          <input
            className="form-control form_field"
            type="time"
            {...field.input}
            placeholder={field.label}
          />
          <div className="text-help">{touched ? error : ""}</div>
        </div>
      );
    } else {
      return (
        <div className={className}>
          <input
            className="form-control form_field"
            type="text"
            {...field.input}
            placeholder={field.label}
          />
          <div className="text-help">{touched ? error : ""}</div>
        </div>
      );
    }
  }

  onSubmit(values) {
    this.props.history.push("/suggestions");
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="home">
        <Navbar />
        <div class="headingtext">
            Please fill out your details in the form below
            </div>
            <div className="block">
        <div className="company_formm col-md-4">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            
            {/* <Field
              name="firstname"
              component={this.renderField}
              label="First Name"
            />
            <Field
              name="lastname"
              component={this.renderField}
              label="Last Name"
            /> */}
            <Field
              name="companyname"
              component={this.renderField}
              label="Company Name"
            />
            <Field
              name="department"
              component={this.renderField}
              label="Department"
            />
            <Field
              name="homeaddress"
              component={this.renderField}
              label="Home Address"
            />
            <Field
              name="companyaddress"
              component={this.renderField}
              label="Company Address"
            />
            <Field
              name="timings"
              component={this.renderField}
              label="Company Timings"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  // validate,
  form: "companyForm"
})(
  connect(
    null,
    null
  )(CompanyForm)
);
