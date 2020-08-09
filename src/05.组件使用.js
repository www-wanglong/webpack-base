// 1.导包
import React from 'react'
import ReactDOM from 'react-dom'
// 如果不做单独的配置 不能省略后缀名
//import Hello from './components/Hello'
// @表示项目中src
import Hello from '@/components/Hello'
// 2.创建虚拟dom js对象的形式来表示dom和dom之间的嵌套
//const mydiv = React.createElement('div', {id: 'mydiv', title: 'div'}, '这是一个div元素')

// js文件中默认不能写这种类类似于Html的编辑  使用babel来转化
// 在js中，混合写入html的语法，叫做jsx语法，符合xml  jsx语法的本质还是在运行的时候，被转化成了React.createElement形式来执行的

const dog = {
  name: '先欧明',
  age: 3,
  gender: '雄'
}

let a = 10
{/** */}
ReactDOM.render(
  <div className="mydiv1">
    {/** 直接把组件的名称 */}
    {/* <Hello name={dog.name}></Hello> */}
    {/** es6扩展 扩展运算法 */}
    <Hello {...dog}></Hello>
  </div>, 
  document.getElementById('app')
)