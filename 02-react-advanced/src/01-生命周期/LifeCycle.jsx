import React from "react";
import { Children } from "react";

class ChildTest extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    throw new Error("child-test error!!!");
    return <div>child</div>;
  }
}

class Test extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
    console.log("constructor----init----1");
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("render----init----2");
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <Children /> */}
        <button onClick={this.handleIncrement}>增加</button>
      </div>
    );
  }

  /**
   * @description 组件已经挂载，这个钩子可以获取dom，数据请求，添加订阅等操作
   * @return {void}
   */
  componentDidMount() {
    console.log("componentDidMount----init----3");
  }

  /**
   * @description 在组件将要销毁时执行的钩子，可以取消一些订阅等操作，避免内存泄漏
   * @return {void}
   */
  componentWillUnmount() {
    console.log("componentWillUnmount----destory----1");
  }

  /**
   * @description 处理子组件抛出异常的钩子
   * @param {Error} error 
   * @param {import("react").ErrorInfo} info
   */
  componentDidCatch(error, info) {
    console.log("componentDidCatch----error----1", error, info);
  }

  /**
   * @description 在数据更新或者强制更新前确认是否需要更新，这个钩子返回为true将执行render函数
   * @param {Readonly<object>} nextProps 更新后的props
   * @param {Readonly<object>} nextState 更新后的state数据
   * @param {any} nextContext 更新后的上下文
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(
      "shouldComponentUpdate----update----1",
      nextProps,
      nextState,
      nextContext
    );
    return true;
  }

  /**
   * @description 在数据更新前可以返回一个快照对象，在componentDidMount中第三个参数接受返回的快照对象
   * @param {Readonly<object>} prevProps 更新前的props
   * @param {Readonly<object>} prevState 更新前的state数据
   * @return {any}
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate----update----2", prevProps, prevState);
    return {
      snapshot: "getSnapshotBeforeUpdate",
    };
  }

  /**
   * @description 组件更新后执行的钩子
   * @param {object} prevProps 更新前的props
   * @param {object} prevState 更新前的state数据
   * @param {any} snapshot getSnapshotBeforeUpdate钩子返回的数据
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate----update----3",
      prevProps,
      prevState,
      snapshot
    );
  }
}

class LifeCycle extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "你好，世界",
      isShowTest: true,
    };
  }

  handleChangeMsg = () => {
    this.setState({
      isShowTest: !this.state.isShowTest,
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        {this.state.isShowTest && (
          <Test>
            <ChildTest />
          </Test>
        )}
        <button onClick={this.handleChangeMsg}>切换状态</button>
      </div>
    );
  }
}

export default LifeCycle;
