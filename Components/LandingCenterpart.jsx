import React, { useRef } from "react";
import "../Css/LandingCenterpart.css";
import photo from "../Media/photo2.jpg"
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import { useIntersection } from "react-use";

export default function LandingCenterpart() {

 
  return (
    <>
      <section  className="Home">
 <div className="main_container">
          <div className="box1_contnet">
            <div className="box_child_1">
              <h1>
                Hello, I'm Jasminder, a Webdeveloper <br />
                With 2 years of <br />
                experience.
              </h1>
            </div>
            <div className="box_child_2">
              <p>
                I care a lot about using design for positive impact. and enjoy <br />
                creating user-centric, delightful, and human experiences.
              </p>
            </div>
            <div className="box_child_3">
              <button><a  style={{color:"white"}} href = "mailto: itsjasminder@gmai.com">Contact</a></button>
            </div>
          </div>
       
        <div className="box_2">
<div className="profile_pic"></div>
        </div>
        </div>
        {/* <div className="container">
          <div className="text-wrapper">
            <p className="animation">UI Designer</p>
  
          </div>
        </div> */}
      </section>
    </>
  );
}
