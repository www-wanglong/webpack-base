import React from 'react'

export default function CmtItem(props) {
  return <div>
    <h1>品论人：{props.user}</h1>
    <p>内容：{props.content}</p>
  </div>
}

