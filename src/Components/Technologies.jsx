import React from 'react'
import html from "../resources/images/html.png";
import css from "../resources/images/css.PNG";
import react from "../resources/images/react.png";
import node from "../resources/images/node.png";
import express from "../resources/images/express.png";
import mongo from "../resources/images/mongodb.png";

export const Technologies = () => {
  return (
    <div className="tech">
        <h1 className="tech-h1">Technologies I Work With!</h1>
        <div className="list">
          <ul>
            <li>
              <img src={html} alt="html here" />
              <h2 className="li-h2">HTML</h2>
            </li>
            <li>
              <img src={css} alt="html here" />
              <h2 className="li-h2">CSS</h2>
            </li>
            <li>
              <img src={react} alt="html here" />
              <h2 className="li-h2">React Js</h2>
            </li>
          </ul>
          <ul>
            <li>
              <img src={node} alt="html here" />
              <h2 className="li-h2">Node Js</h2>
            </li>
            <li>
              <img src={express} alt="html here" />
              <h2 className="li-h2">Express Js</h2>
            </li>
            <li>
              <img src={mongo} alt="html here" />
              <h2 className="li-h2">Mongo DB</h2>
            </li>
          </ul>
        </div>
      </div>    
  )
}
