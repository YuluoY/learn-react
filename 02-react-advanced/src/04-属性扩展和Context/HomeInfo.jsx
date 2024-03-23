import React, { Component } from "react";
import { ThemeContext, UserContext } from "./context";

export class HomeInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <span>
            <b>类组件</b>爷爷辈Test组件使用属性扩展传过来的值：
            {JSON.stringify(this.props)}
          </span>
        </div>
        <div>
          <span>
            <b>类组件</b>爷爷辈Test组件使用Context传过来的值：
            {JSON.stringify(this.context)}
          </span>
        </div>
        <UserContext.Consumer>
          {(value) => <h2>User-Context提供的默认值：{value.name}</h2>}
        </UserContext.Consumer>
      </div>
    );
  }
}

HomeInfo.contextType = ThemeContext;

export function HomeInfo2() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => (
          <div>
            <span>
              <b>函数式组件</b>获取爷爷辈Test组件Context：
              {JSON.stringify(value)}
            </span>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default HomeInfo;
