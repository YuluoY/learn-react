import React, { Component } from "react";
import "./style.css";
import ChildrenSlot from "./ChildrenSlot";
import PropsSlot from "./PropsSlot";
import ScopeSlot from "./ScopeSlot";

class ExtraSlot extends Component {
  render() {
    return (
      <h2>
        <em>类组件插槽</em>
      </h2>
    );
  }
}

export class Test extends Component {
  state = {
    scopeSlots: ["left", "center", "right"],
    collection: [],
  };

  // 这也可以是一个组件
  getScopeSlotItem(value) {
    const { collection, scopeSlots } = this.state;
    
      // 收集子组件传父组件的值
    collection.push(value);
    if (collection.length === scopeSlots.length) {
      this.setState({ collection });
    }

    let slotEl = "";
    if (value === "left") {
      slotEl = <button>作用域插槽-左边</button>;
    } else if (value === "center") {
      slotEl = <h1>作用域插槽-中间</h1>;
    } else if (value === "right") {
      slotEl = <i>作用域插槽-右边</i>;
    }

    return <div className={value}>{slotEl}</div>;
  }

  leftSlot() {
    return <button>属性插槽-函数式组件插槽-左边</button>;
  }

  centerSlot() {
    return <h1>属性插槽-函数式组件插槽-中间</h1>;
  }

  rightSlot() {
    return <i>属性插槽-函数式组件插槽-右边</i>;
  }

  render() {
    return (
      <div className="test">
        {/* 数组插槽 */}
        <ChildrenSlot>
          {/* 传入多个是el数组，传入一个就是children: el */}
          <button>左边</button>
          <h1>中间</h1>
          <i>右边</i>
        </ChildrenSlot>

        {/* 属性插槽 */}
        <PropsSlot
          leftSlot={this.leftSlot()}
          centerSlot={this.centerSlot()}
          rightSlot={this.rightSlot()}
          extraSlot={<ExtraSlot />}
        />

        {/* 作用域插槽 */}
        <ScopeSlot
          data={this.state.scopeSlots}
          value={(v) => this.getScopeSlotItem(v)}
        >
          <i>这是我收集的value：{this.state.collection.join(",")}</i>
        </ScopeSlot>
      </div>
    );
  }
}

export default Test;
