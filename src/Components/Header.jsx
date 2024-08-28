import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  const NavStyle={
    backgroundColor:" #002244",
  }
  return (
      <Navbar style={NavStyle} data-bs-theme="dark"  fixed="top" >
          <Container >
          <Navbar.Brand href="#">Welcome To My Porfolio!</Navbar.Brand>
         
        </Container>
      </Navbar>

  );
}

export default ContainerOutsideExample;