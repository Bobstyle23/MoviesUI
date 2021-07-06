import React, { Component } from "react";

class Likes extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={({ cursor: "pointer" }, { outline: "none" })}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default Likes;
