// 1.导包
import React from 'react'
import ReactDOM from 'react-dom'
import Cmtlist from '@/components/Cmtlist'

import BindEvent from '@/components/BindEvent'
// class创建组件

const user = {
  name:'long',
  age: 89
}

ReactDOM.render(
  <div className="mydiv1">
    <BindEvent></BindEvent>
  </div>, 
  document.getElementById('app')
)