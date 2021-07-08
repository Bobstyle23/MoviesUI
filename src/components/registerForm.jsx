import React, { Component } from "react";
import Input from "./common/input";

class Register extends Component {
  state = {
    account: { userName: "", password: "", confirmPassword: "" },
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="userName"
            value={account.userName}
            label="Username"
            onChange={this.handleInput}
            type="text"
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleInput}
            type="password"
          />

          <Input
            name="confirmPassword"
            value={account.confirmPassword}
            label="Confirm Password"
            onChange={this.handleInput}
            type="password"
          />

          <button className="btn btn-primary mt-2">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
