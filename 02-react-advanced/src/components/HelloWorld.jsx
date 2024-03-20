import { Component } from "react";

export default class HelloWorld extends Component {
  constructor(props) {
    super();
  }

  state = {
    message: "Hello World！",
  };

  render() {
    return <div className="hello world">{this.state.message}</div>;
  }
}