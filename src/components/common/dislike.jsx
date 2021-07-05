import React, { Component } from "react";

class Dislike extends Component {
  state = {};
  render() {
    if (!this.props.disliked) {
      return <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>;
    }
    if (this.props.disliked) {
      return <i class="fa fa-thumbs-down" aria-hidden="true"></i>;
    }
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      />
    );
  }
}

export default Dislike;
