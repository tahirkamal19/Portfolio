import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import './Footer.css'

export const Footer = () => {
  return (
    <Navbar className="footer" 
    // fixed="bottom"
    >
      <div className="contact">
      <h1>Contact</h1>
      <p>Feel Free To Contact Me!</p>
      </div>
      <div className="socials">
       <SocialMedia/>
      </div>
    </Navbar>
  );
};
