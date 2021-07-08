import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
  state = {
    data: { userName: "", password: "", email: "", confirmPassword: "" },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Name"),
    password: Joi.string().required().min(5).label("Password"),
    confirmPassword: Joi.string().required().min(5).label("Confirm Password"),
    email: Joi.string().required().label("Email"),
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("userName", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("confirmPassword", "Confirm Password", "password")}
          {this.renderBtn("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
