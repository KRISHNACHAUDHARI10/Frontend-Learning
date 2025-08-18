import React from 'react'

const Button =({text,onclickhandler}) =>{
  return (
    <button  onClick={onclickhandler} >{text}</button>
  )
}

export default Button