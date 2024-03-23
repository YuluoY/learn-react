import { Component } from "react";

export class ScopeSlot extends Component {
  render() {
    const { data, value, children } = this.props;
    return (
      <div className="nav">
        {data.map((item) => value(item))}
        <div className="extra">{children}</div>
      </div>
    );
  }
}

export default ScopeSlot;
