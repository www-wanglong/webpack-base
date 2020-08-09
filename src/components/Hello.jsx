import React from 'react'
// 第一种创建组件方式
export default function Hello(props) {
  // 在组件中return null表示什么都不渲染
  //return null
  //在组件中 必须返回一个合法的jsx虚拟dom元素
  console.log(props)

  // 不论是vue还是react 组件中的props永远都是只读的 不能被重新
  //props.name = '张三'
  return <div>这是hello组件{props.name}</div>
}

// 把组件暴露
//export default Hello