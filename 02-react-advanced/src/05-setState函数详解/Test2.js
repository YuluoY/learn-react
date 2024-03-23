
/**
 * 对React的setState函数进行逻辑分析，尝试理解其实现原理。
 * 一个简单的demo
 */

const queue = [];
const state = {
  count: 0,
  name: '张三',
  hobby: ['唱', '跳', 'rap', '篮球']
};

function setState(cb) {
  queue.push(cb);
}

function start() {
  const o = { ...state };
  for (let i = 0; i < queue.length; i++) {
    const cb = queue[i];
    const newState = cb(i === 0 ? state : o);
    Object.assign(o, newState);
  }
  Object.assign(state, o);
}

setState((prevState) => {
  console.log(state === prevState, state, prevState);
  return {
    count: prevState.count + 1,
  }
})

setState((prevState) => {
  state.hobby.push('喝酒')
  state.name = '王五'
  console.log(state === prevState, state, prevState);
  return {
    count: prevState.count + 1,
  }
})

setState((prevState) => {
  console.log(state === prevState, state, prevState);
  return {
    count: prevState.count + 1,
  }
})

setTimeout(start);