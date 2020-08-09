// 嘿嘿嘿
console.log('k')

// webpack-dev-server打包好的main.js是托管到内存中，所以在项目只看不到；


// 1. 这两个导入的时候，接收的成员名称 必须这么写
import React from 'react' // 创建组件、虚拟DOM 生命周期
import ReactDOM from 'react-dom' //把创建好的组件和 虚拟dmo放到页面上展示

// 2. 创建虚拟dom元素
const myh1 = React.createElement('h1', {id:'myh1', title: 'this is h1'}, '这是个h1')

const mydiv = React.createElement('div', null, '这是个div', myh1)

// 渲染 页面上的DOM结构 最好的方式是写Html代码

const mytest = <div>test</div>

// 3. 使用ReactDOM渲染

ReactDOM.render(mytest, document.getElementById('app'))