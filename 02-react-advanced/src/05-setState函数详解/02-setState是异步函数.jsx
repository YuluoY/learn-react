import React, { Component } from "react";

export class Test extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 0,
    };
  }

  handleChangeCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
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
