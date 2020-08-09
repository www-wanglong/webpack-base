import React from 'react'

import CmtItem from '@/components/CmtItem'
// 如果在引用某个包的时候 这个包被安装到node_modules目录中 
// 第三方 样式表 都已css结尾 (这样 我们就只为自己的css模块化) 自己的样式表以.scss
//import bootcss from 'bootstrap/dist/css/bootstrap.css'
//console.log(bootcss)

export default class Cmtlist extends React.Component {
  constructor() {
    super()
    this.state = {
      lists: [
        {id: 1, user: 'wang', content: 'haha'},
        {id: 2, user: 'long', content: 'fafa'}
      ]
    }
  }

  render() {
    return <div>
      <h1 className="title">这是列表组件</h1>
      {this.state.lists.map(item => <CmtItem key={item.id} {...item}></CmtItem> )}
    </div>
  }
}