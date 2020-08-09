// 1.导包
import React from 'react'
import ReactDOM from 'react-dom'
// 2.创建虚拟dom js对象的形式来表示dom和dom之间的嵌套
//const mydiv = React.createElement('div', {id: 'mydiv', title: 'div'}, '这是一个div元素')

// js文件中默认不能写这种类类似于Html的编辑  使用babel来转化
// 在js中，混合写入html的语法，叫做jsx语法，符合xml  jsx语法的本质还是在运行的时候，被转化成了React.createElement形式来执行的
const mydiv = <div id="mydiv" title="div">这是一个div元素</div>
// 3.渲染
ReactDOM.render(mydiv, document.getElementById('app'))