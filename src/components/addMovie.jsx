import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class AddMovie extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).required().label("Stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  render() {
    return (
      <div>
        <h1>Add New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderBtn("Add Movie")}
        </form>
      </div>
    );
  }
}

export default AddMovie;
