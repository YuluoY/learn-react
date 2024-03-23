import React, { Component } from "react";

export class ChildrenSlot extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="nav">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    );
  }
}

export default ChildrenSlot;
