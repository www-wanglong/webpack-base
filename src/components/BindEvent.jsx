import React from 'react'

export default class BindEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '哈哈'
    }
  }

  render() {
    return <div>
      BindEvent组件
      <hr />
      {/** 在react中 有自己的事件  onClick只接受function;箭头函数本身就是个匿名函数*/}
      <button onClick={() => this.myClick() }>按钮</button>
      <h3>{this.state.msg}</h3>

      <input ref="txt" type="text" value={this.state.msg} onChange={(e) => this.textChanged(e)}></input>
    </div>
  }

  textChanged = (e) => {
    console.log(e.target.value)
    console.log(this.refs.txt.value)
    this.setState({msg: e.target.value})
  }

  // 实例方法
  myClick = () => {
    console.log('222')
    //this.state.msg = 'sap'
    //1 只会把对应的state状态更新 不会覆盖其他的state状态
    //2. this.ssetState方法执行是 异步的， this.stateState({}, callback)
    this.setState({msg: 'pp'})
  }
}
