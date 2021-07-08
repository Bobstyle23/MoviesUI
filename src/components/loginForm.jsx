import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
    errors: {},
  };

  validateProperty = ({ name, value }) => {
    if (name === "userName") {
      if (value.trim() === "") return "Username is required!";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required!";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleInput = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.userName.trim() === "")
      errors.userName = "Username is required!!!";
    if (account.password.trim() === "")
      errors.password = "Password is required!!!";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="userName"
            value={account.userName}
            label="Username"
            onChange={this.handleInput}
            type="text"
            error={errors.userName}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleInput}
            type="password"
            error={errors.password}
          />

          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
