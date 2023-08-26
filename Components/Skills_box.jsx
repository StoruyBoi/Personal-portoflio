import React from 'react'
import "../Css/Skills.css"
export default function Skills_box(props) {
  return (
    <>
    <div className="Main_box">


<img src={props.img} alt="" />
<p>{props.text}</p>

    </div>
    
    
    </>
  )
}
