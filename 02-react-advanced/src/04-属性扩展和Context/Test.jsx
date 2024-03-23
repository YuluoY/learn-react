import React, { Component } from "react";
import { ThemeContext } from "./context";
import Home from "./Home";

export class Test extends Component {
  state = {
    info: {
      theme: "light",
      color: "blue",
    },
  };

  render() {
    const { info } = this.state;

    return (
      <div>
        {/* 可以在这里对组件进行包裹传入context的值，也可以在createContext函数中传入默认值。
          如果顶层查找没有找到Provider，则会使用提供的默认值 */}
        <ThemeContext.Provider
          value={{
            theme: "dark",
            color: "red",
          }}
        >
          <Home {...info} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Test;
