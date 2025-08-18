import React from 'react'

const Display = ({texttoshow})=> {
  return <>
    {texttoshow ? <p>{texttoshow}</p> : <p>0</p>}
    </>
}

export default Display; 