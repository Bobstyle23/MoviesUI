import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  handleInput = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              autoFocus
              onChange={this.handleInput}
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleInput}
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
