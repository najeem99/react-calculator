import React from 'react'

export default function Button(props) {
  return (
    <button className={"col-1 btn  m-2 btn "+props.buttonStyle}   onClick={(e) => props.onClick(e)}>{props.children}</button>
  )
}
