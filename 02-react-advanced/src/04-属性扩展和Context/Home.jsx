import React, { Component } from "react";
import HomeInfo, { HomeInfo2 } from "./HomeInfo";

export class Home extends Component {
  render() {
    return (
      <div>
        <HomeInfo {...this.props} />
        <HomeInfo2 />
      </div>
    );
  }
}

export default Home;