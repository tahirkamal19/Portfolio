import React from "react";
import "./Projects.css";
import Cards from "../resources/Cards/Cards";
import Image from "../resources/images/Login.PNG";
import blog from "../resources/images/blog.PNG";
import Bits from "../resources/images/Bits.PNG"

const ProjectsList = [
  {
    id: 1,
    Title: "Task Master",
    Image: Image,
    Desc: `Developed a task management system with user authentication ,
          role-based access control, and task tracking. Features include custom
          deadline units, priority settings, and an admin dashboard. Utilized a
          responsive design for an optimal user experience.<br/>
          Technologies Used:
          React, Node.js, Express, MongoDB, JWT, CSS`,
  },
  {
    id: 2,
    Image: blog,
    Title: "Blogging Website",
    Desc: `Developed a dynamic blogging platform with user
          registration, authentication, and profile management.
          Features include rich text editing, comments, and an
          admin panel for user and content management, ensuring
          a smooth and secure user experience.
          Technologies Used: React, Node.js, Express, MongoDB,
          JWT, CSS`,
  },
  {
    id: 3,
    Image: Bits,
    Title: "Bits",
    Desc: `Developed a file-sharing platform with upload, download functionality. Implemented features like uplaoding files, images, PDFs, Generating shareable links, and Downloading Files by using the link. Simple yet effective UI.
Technologies Used: React, Node.js, Express, MongoDB,
          JWT, CSS`,
  },
];

export const Projects = () => {
  const projects = ProjectsList;
  return (
    <div className="projects">
      <h1 className="tech-h1">Projects Created!</h1>
      <div className="cards">
        {projects.map((project) => (
          <Cards project={project} />
        ))}
      </div>
    </div>
  );
};
