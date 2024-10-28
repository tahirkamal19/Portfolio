import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>MERN Stack Internship Experience</h2>
      <div className="experience-item">
        <h3>MERN Stack Intern</h3>
        <p className='ex-p'><strong>Company:</strong> Sigma Evolution, IT Agency</p>
        <p className='ex-p'><strong>Duration:</strong> June 2024 - August 2024</p>
        <ul className="description-ul">
          <li>Built full-stack applications using MERN (MongoDB, Express, React, Node)</li>
          <li>Built a multi-vendor E-commerce website</li>
          <li>Developed RESTful APIs and performed database operations with MongoDB</li>
          <li>Created responsive user interfaces with React and CSS frameworks</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
