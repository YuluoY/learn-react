import { Component } from "react";
import LifeCycle from "./components/LifeCycle";

export default class App extends Component {
  constructor(props) {
    super();
  }

  state = {};

  render() {
    return (
      <div className="app">
        <LifeCycle />
      </div>
    );
  }
}
