import React, { Component } from "react";
import propTypes from "prop-types";

class Test extends Component {
  static propTypes = {
    message: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    value: propTypes.string,
    value2: propTypes.string, // 定义value2的类型
    value3: propTypes.string.isRequired, // 定义value3的类型
  };

  static defaultProps = {
    value2: "我是默认值-2",
  };

  render() {
    const { message, age, value, value2 } = this.props;
    return (
      <div>
        <h1>{message}</h1>
        <p>
          我今年{age}岁，{value}，{value2}
        </p>
      </div>
    );
  }
}

Test.propTypes = {
  message: propTypes.string.isRequired, // 必须的字符串
  age: propTypes.number,
};

Test.defaultProps = {
  message: "hello",
  age: 18,
  value: "默认值",
};

export default Test;
