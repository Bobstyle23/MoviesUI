import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class Register extends Component {
  state = {
    account: { userName: "", password: "", confirmPassword: "", email: "" },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    confirmPassword: Joi.string()
      .required()
      .label("Confirmation of the password"),
    email: Joi.string().required().label("Email"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleUserSubmit}>
          <Input
            name="userName"
            value={account.userName}
            label="Name"
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

          <Input
            name="email"
            value={account.email}
            label="Email"
            onChange={this.handleUserInput}
            type="email"
            error={errors.email}
          />

          <button disabled={this.validate()} className="btn btn-primary mt-2">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
