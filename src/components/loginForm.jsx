import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { userName: "", password: "" },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("userName", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderBtn("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
