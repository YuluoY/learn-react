import { Component } from "react";
import Test from "./04-属性扩展和Context/Test";

export default class App extends Component {
  constructor(props) {
    super();
  }

  state = {};

  render() {
    return (
      <div className="app">
        <Test message="你好呀" age={18}/>
      </div>
    );
  }
}
