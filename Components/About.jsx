import React from "react";
import "../Css/About.css";
export default function About() {
  return (
    <>
      <section id="about" className="About">
        <div className="myeducation">
          <h1 className="point">My Education</h1>
          <div className="about_maincontee">
          <div className="Expericne_box">
            <div className="ebox1">
              <h1>High School</h1>
              <p>Chandigarh</p>
              <p> 2011 - 2018</p>
            </div>

            <div className="ebox2">
              <div className="firstcirlcle"></div>
              <div className="firtsLine"></div>
            </div>
           
          </div>
          <div className="Expericne_box">
            <div className="ebox1">
              <h1>Inter School</h1>
              <p>Non-Medical</p>
              <p>Chandigarh</p>
              <p> 2018 - 2021</p>
            </div>

            <div className="ebox2">
              <div className="firstcirlcle"></div>
              <div className="firtsLine"></div>
            </div>
         
          </div>
          <div className="Expericne_box">
            <div className="ebox1">
              <h1>College</h1>
              <p>B.S.C Computer Science</p>
              <p>Chandigarh</p>
  
              <p> 2021 - 2023</p>
            </div>

            <div className="ebox2">
        
           
            </div>
            </div>
          </div>
          
        </div>
        {/* ----------------------------------------------------------- */}
        <div className=" experence   ">
          <h1 className="point">My Work Experience</h1>
          <div className="Expericne_box1">
            <div className="ebox1">
              <h1>Prodigy Infotech</h1>
              <p> 1 Aug 2023 - 31 Aug 2023</p>
            </div>
            <div className="ebox2">
              <div className="firstcirlcle"></div>
              <div className="firtsLine"></div>
              {/* <div className="firstcirlcle"></div>
<div className="firtsLine"></div>
<div className="firstcirlcle"></div> */}

              <p>Comming soon</p>
            </div>
            <div className="ebox3">
              <h1>Frontend developer Intern</h1>
              <p>
                A fontend developer post to gives 4 <br /> projects to complete
                withn a month
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
