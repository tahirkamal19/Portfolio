import React from "react";
import { Navbar } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

export const Footer = () => {
  return (
    <Navbar
      style={{
        display: "flex",
        flexDirection: "row",
        background: "#002244",
        opacity: "0.9",
        color: "white",
        marginTop: "40px",
      }}
    >
      <div style={{display: "flex",
        flexDirection: "column",}}>
      <h1>Contact</h1>
      <p>Feel Free To Contact Me!</p>
    
      </div>
      <div>
       <SocialMedia/>
      </div>
    </Navbar>
  );
};
