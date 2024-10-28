import React from "react";
import "./About.css";
import img1 from "../resources/images/img1.png";
export const About = () => {
  return (

      <div className="mainn">
        <div className="div-1">
          <h1>Muhammad Tahir Kamal</h1>
          <br />
          <h3>Web Developer /</h3>
          <h3>MERN Stack Developer</h3>
        </div>
        <span className="img">
          <img src={img1} alt="" />
        </span>
        <div className="div-2">
          <p>
            I am an enthusiast Web Developer and a graduate in Computer
            Science. I have great compassion for creativity and that is what
            brought me to this field of development.
          </p>
        </div>
      </div>

  );
};
