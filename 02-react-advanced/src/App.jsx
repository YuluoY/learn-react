import { Component } from "react";
import HelloWorld from "./components/HelloWorld";

export default class App extends Component {
  constructor(props) {
    super();
  }

  state = {};

  render() {
    return (
      <div className="app">
        <HelloWorld />
      </div>
    );
  }
}
