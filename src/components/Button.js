import React from 'react'

export default function Button(props) {
  return (
    <button className="col-sm-1 btn btn-primary m-2" onClick={(e) => props.onClick(e)}>{props.children}</button>
  )
}
