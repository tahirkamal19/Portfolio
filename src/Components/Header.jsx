import { Navbar, Container } from "react-bootstrap";
import "./Header.css"

function ContainerOutsideExample() {
  
  return (
    <Navbar className="header">
      <Container>
      <Navbar.Brand className="greetings">Welcome to my Profile</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerOutsideExample;