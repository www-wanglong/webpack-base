// 1.导包
import React from 'react'
import ReactDOM from 'react-dom'
import { userInfo } from 'os';
// class创建组件
class Movie extends React.Component {
  constructor() {
    super()
    // 只有调用了super后 才能使用this
    this.state = {
      msg: 'this is state msg'
    } // === vue的data() { return {} }
  }
  // 渲染当前组件对应的虚拟dom
  // 在class关键字创建的组件中 如果想使用外界传递过来的props参数 不需要接收 直接this.prosp
  render() {

    //this.props.name = 'longlong' props都是只读的
    {/** this表示当前组件的实例对象 */}
    this.state.msg = 'change'
    return <div>类组件{this.props.name}
     <h3>{this.state.msg}</h3>
    </div>
  }
}

const user = {
  name:'long',
  age: 89
}

ReactDOM.render(
  <div className="mydiv1">
    {/** 这里的标签 就是一个实例对象 */}
    <Movie {...user}></Movie>
  </div>, 
  document.getElementById('app')
)

// 两种组件对比
//1.使用class关键字创建的组件 有自己的私有数据和生命周期函数； 使用function创建的组件只有props 没有私有数据和生命周期
//有状态组件和无状态组件之间的本质区别：有无state和有无生命周期(无状态组件 运行效率高)

//组件中的props和state区别
  // 1.props中的主句都是外界传递过来的
  // 2.state中的数据，都是组件私有的（通过ajax获取来的数据）
  // 3.props中的数据都是只读的 不能重新赋值；state中的数据都是可读可写的