import React, { Component } from "react";

export class PropsSlot extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot, extraSlot } = this.props;

    return (
      <div className="nav">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
        <div className="extra">{extraSlot}</div>
      </div>
    );
  }
}

export default PropsSlot;
