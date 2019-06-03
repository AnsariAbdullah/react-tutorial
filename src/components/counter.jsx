import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <div style = {this.styles}>Property CSS</div>
        <div style={{ color: "red" }}>Inline CSS</div>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;
