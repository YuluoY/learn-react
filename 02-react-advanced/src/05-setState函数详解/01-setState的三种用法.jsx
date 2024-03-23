import React, { Component } from "react";

export class Test extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 0,
    };
  }

  handleChangeCount = () => {
    // 1. 使用setState传入对象修改name
    this.setState({
      count: this.state.count + 1,
    });
    /**
     * 2. 使用回调函数修改name
     * 以函数回调形式修改有两点好处：
     *  1、能够使对state修改的操作内聚，集中在setState回调函数中
     *  2、能够获取到更新前的state和props，做更多的事情
     */
    this.setState((prevState, prevProps) => {
      // 注意：prevState和prevProps是更新前的state和props
      console.log(prevState, prevProps);
      return {
        count: prevState.count + 1,
      }
    })
    /**
     * 3. setState是一个异步函数，不会阻塞同步代码。
     *  如果你需要使用到最新的state，可以使用setState的第二个参数，更新后的回调
     */
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("更新后：" + this.state.count); // 输出：1
      }
    );
    console.log("更新前：" + this.state.count); // 输出：0
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
