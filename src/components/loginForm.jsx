import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
  };

  handleInput = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
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
    const { account } = this.state;
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
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleInput}
            type="password"
          />

          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
