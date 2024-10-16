import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ProjectDetails } from "../../Components/ProjectDetails";
import "./Cards.css";  // Import the new CSS file

function Cards({ project }) {
  const [openModel, setOpenModal] = useState(false);

  return (
    <>
      <Card className="project-card">
        <Card.Img  variant="top" src={project.Image} />
        <Card.Body className="card-body">
          <Card.Title>{project.Title}</Card.Title>
          <Card.Text>Click For More Info!</Card.Text>
          <Button variant="primary" onClick={() => setOpenModal(true)}>
            Read More
          </Button>
        </Card.Body>
      </Card>
      <ProjectDetails
        show={openModel}
        onHide={() => setOpenModal(false)}
        Title={project.Title}
        Desc={project.Desc}
        Image={project.Image}
      />
    </>
  );
}

export default Cards;
