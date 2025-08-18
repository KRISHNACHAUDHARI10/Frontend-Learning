import React from 'react'

function Button({text,onclickhandler}) {
  return (
  <button  onClick={onclickhandler}>{text}</button>
  )
}

export default Button