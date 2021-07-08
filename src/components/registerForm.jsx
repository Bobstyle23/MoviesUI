import React, { Component } from "react";
import Input from "./common/input";

class Register extends Component {
  state = {
    account: { userName: "", password: "", confirmPassword: "" },
    errors: {},
  };

  handleUserSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleUserInput = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.userName.trim() === "")
      errors.userName = "Username is required!";
    if (account.password.trim() === "")
      errors.password = "Password is required!";
    if (account.confirmPassword.trim() === "")
      errors.confirmPassword = "Confirm your password!";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleUserSubmit}>
          <Input
            name="userName"
            value={account.userName}
            label="Username"
            onChange={this.handleUserInput}
            type="text"
            error={errors.userName}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleUserInput}
            type="password"
            error={errors.password}
          />

          <Input
            name="confirmPassword"
            value={account.confirmPassword}
            label="Confirm Password"
            onChange={this.handleUserInput}
            type="password"
            error={errors.confirmPassword}
          />

          <button className="btn btn-primary mt-2">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
