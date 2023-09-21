import React from "react";
import "../Css/Workd.css";
import styled from "@emotion/styled";

export default function Work_box(props) {

  
  return (
    <>
    
    <div className="main_box" style={props.styleee}>

 
  
      <div className="box_1_wrok">
        <div className="box11">
          <h1>{props.heading}</h1>
          <p>{props.desc}</p>
        </div>

        <div className="box22">
          <div className="circle">
            <a href={props.link}>
              <img src={props.img} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="box_2_work">
        <img src={props.bgImg} alt="" />
      </div>
      </div>    
    </>
  );
}
