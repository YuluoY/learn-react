import React, { Component } from "react";
import { flushSync } from "react-dom";

export class Test extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 0,
    };
  }

  handleChangeCount = () => {
    flushSync(() => {
      this.setState({count: this.state.count + 1});
    });
    console.log(this.state.count);  // 1
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.handleChangeCount}>count + 1</button>
      </div>
    );
  }
}

export default Test;
