import Modal from 'react-bootstrap/Modal';
import {React, useState} from 'react'
import Button from "react-bootstrap/Button";


export const ProjectDetails = ({show, onHide, Title,
  Desc,
  Image}) => {
    
  return (
    <>
    <Modal show={show}  
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ color:"black" }}
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {Title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <img style={{height:'400px', width:"650px", marginLeft:"50px"}} src={Image}/>
        <br/>
          {Desc}

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
 