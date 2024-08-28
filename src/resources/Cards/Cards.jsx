import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ProjectDetails } from "../../Components/ProjectDetails";

function Cards({ project }) {
  const [openModel, setOpenModal] = useState(false);

  const text = project.Desc;
  const displayText =
    text.length > 40 ? text.split(" ").slice(0, 30).join(" ") + "..." : text;

  return (
    <>
      <Card style={{ width: "45rem", marginLeft: "20px", marginTop: "5rem", height:"37rem", backgroundColor:"#13274F", color:"white", paddingTop:"10px" }}>
        <Card.Img
          style={{ width: "25rem", height: "15rem", marginTop:"5px" }}
          variant="top"
          src={project.Image}
        />
        <Card.Body>
          <Card.Title>{project.Title}</Card.Title>
          <Card.Text style={{ fontWeight: "400", opacity: "100"}}>
            {displayText}
          </Card.Text>
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
