import React, { Component } from "react";

class MathRandom extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {}

  componentWillUnmount() {
  }

  render() {
    console.log(this.state);
    const { random } = this.state;
    return (
      <div>
        <div style={{ color: "red" }}>
          Random: {random}
        </div>
      </div>
    );
  }
}

export default MathRandom;
